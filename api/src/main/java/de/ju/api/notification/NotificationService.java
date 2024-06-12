package de.ju.api.notification;

import de.ju.api.exception.EntityNotExistsException;
import de.ju.api.user.AppUser;
import de.ju.api.user.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private final NotificationRepository repository;
    private final AppUserService userService;

    public List<Notification> getAllNotificationsFromUser(String token) throws EntityNotExistsException {
        AppUser user = userService.findUserByToken(token);

        return repository.findAllByUserId(user.getId());
    }

    public void sendNotification(String content, UUID userId) throws EntityNotExistsException {
        AppUser user = userService.findUserById(userId);

        repository.save(Notification.builder().content(content).user(user).build());
    }
}
