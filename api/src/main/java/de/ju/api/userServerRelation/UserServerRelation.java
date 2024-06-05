package de.ju.api.userServerRelation;

import de.ju.api.server.Server;
import de.ju.api.user.AppUser;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "user-server")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserServerRelation {
    @EmbeddedId
    private UserServerKey id;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    private AppUser user;

    @ManyToOne
    @MapsId("serverId")
    @JoinColumn(name = "server_id")
    private Server server;
}
