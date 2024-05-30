package de.ju.api.notification;

import de.ju.api.user.AppUser;
import de.ju.api.user.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private final NotificationRepository notificationRepository;
    private final AppUserService userService;

    public List<Notification> getAllNotificationsFromUser(UUID userId) throws UsernameNotFoundException {
        userService.findUserById(userId);

        return notificationRepository.findAllByUserId(userId);
    }

    public void sendNotification(String content, UUID userId) throws UsernameNotFoundException {
        AppUser user = userService.findUserById(userId);

        notificationRepository.save(Notification.builder()
                .content(content)
                .user(user)
                .build()
        );
    }
}
