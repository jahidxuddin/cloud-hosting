package de.ju.api.userServerRelation;

import de.ju.api.exception.EntityNotExistsException;
import de.ju.api.server.Server;
import de.ju.api.server.ServerRepository;
import de.ju.api.user.AppUser;
import de.ju.api.user.AppUserService;
import de.ju.api.userServerRelation.model.UserServerRelationDeleteRequest;
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
    private final ServerRepository serverRepository;

    public List<Server> getAllServerFromUser(UUID userId) throws EntityNotExistsException {
        userService.findUserById(userId);

        return repository.findAllByUserId(userId).stream().map(UserServerRelation::getServer).toList();
    }

    public List<Server> getAllServerFromUser(String token) throws EntityNotExistsException {
        AppUser user = userService.findUserByToken(token);

        userService.findUserById(user.getId());

        return repository.findAllByUserId(user.getId()).stream().map(UserServerRelation::getServer).toList();
    }

    public void addUserServerRelation(AppUser user, Server server) {
        repository.save(UserServerRelation.builder().id(new UserServerKey(user.getId(), server.getId())).user(user).server(server).build());
    }

    public void removeUserServerRelation(UserServerRelationDeleteRequest request) throws EntityNotExistsException {
        AppUser user = userService.findUserByToken(request.token());
        Server server = serverRepository.findById(request.serverId()).orElseThrow(() -> new EntityNotExistsException("Server existiert nicht"));

        Optional<UserServerRelation> userServerRelationOptional = repository.findById(new UserServerKey(user.getId(), request.serverId()));
        if (userServerRelationOptional.isEmpty()) {
            throw new EntityNotExistsException("Benutzer Server Beziehung existiert nicht");
        }

        repository.delete(userServerRelationOptional.get());
        serverRepository.delete(server);
    }
}
