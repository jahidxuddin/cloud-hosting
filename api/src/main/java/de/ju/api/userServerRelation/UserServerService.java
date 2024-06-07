package de.ju.api.userServerRelation;

import de.ju.api.server.Server;
import de.ju.api.user.AppUser;
import de.ju.api.user.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServerService {
    private final UserServerRepository userServerRepository;
    private final AppUserService userService;

    public List<Server> getAllServerFromUser(UUID userId) throws UsernameNotFoundException {
        userService.findUserById(userId);

        return userServerRepository.findAllByUserId(userId)
                .stream()
                .map(UserServerRelation::getServer)
                .toList();
    }

    public List<Server> getAllServerFromUser(String token) throws UsernameNotFoundException {
        AppUser user = userService.findUserByToken(token);

        userService.findUserById(user.getId());

        return userServerRepository.findAllByUserId(user.getId())
                .stream()
                .map(UserServerRelation::getServer)
                .toList();
    }
}
