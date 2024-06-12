package de.ju.api.userServerRelation;

import de.ju.api.exception.EntityAlreadyExistsException;
import de.ju.api.exception.EntityNotExistsException;
import de.ju.api.server.Server;
import de.ju.api.server.ServerService;
import de.ju.api.user.AppUser;
import de.ju.api.user.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServerService {
    private final UserServerRepository repository;
    private final AppUserService userService;
    private final ServerService serverService;

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

    public void addUserServerRelation(UserServerKey userServerKey) throws EntityAlreadyExistsException, EntityNotExistsException {
        Optional<UserServerRelation> userServerRelationOptional = repository.findById(userServerKey);
        if (userServerRelationOptional.isPresent()) {
            throw new EntityAlreadyExistsException("Diese User-Server Relation existiert bereits.");
        }

        AppUser user = userService.findUserById(userServerKey.getUserId());

        Optional<Server> server = serverService.findServerById(userServerKey.getServerId());
        if (server.isEmpty()) {
            throw new EntityNotExistsException("Der Server existiert nicht.");
        }

        repository.save(UserServerRelation.builder()
                .user(user)
                .server(server.get())
                .build());
    }
}
