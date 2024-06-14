package de.ju.api.userServerRelation;

import de.ju.api.exception.EntityNotExistsException;
import de.ju.api.server.Server;
import de.ju.api.user.AppUser;
import de.ju.api.user.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServerService {
    private final UserServerRepository repository;
    private final AppUserService userService;

    public List<Server> getAllServerFromUser(UUID userId) throws EntityNotExistsException {
        userService.findUserById(userId);

        return repository.findAllByUserId(userId)
                .stream()
                .map(UserServerRelation::getServer)
                .toList();
    }

    public List<Server> getAllServerFromUser(String token) throws EntityNotExistsException {
        AppUser user = userService.findUserByToken(token);

        userService.findUserById(user.getId());

        return repository.findAllByUserId(user.getId())
                .stream()
                .map(UserServerRelation::getServer)
                .toList();
    }

    public void addUserServerRelation(AppUser user, Server server) {
        repository.save(
                UserServerRelation.builder()
                        .id(new UserServerKey(user.getId(), server.getId()))
                        .user(user)
                        .server(server)
                        .build()
        );
    }
}
