package de.ju.api.notification;

import de.ju.api.model.MessageResponse;
import de.ju.api.notification.model.NotificationRequest;
import de.ju.api.notification.model.NotificationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("api/v1/notification")
@RequiredArgsConstructor
public class NotificationController {
    private final NotificationService notificationService;

    @GetMapping("/read/{userId}")
    public ResponseEntity<?> getAllNotificationsFromUser(@PathVariable("userId") UUID userId) {
        try {
            return ResponseEntity.ok(notificationService.getAllNotificationsFromUser(userId)
                    .stream()
                    .map(notification -> NotificationResponse.builder()
                            .id(notification.getId())
                            .content(notification.getContent())
                            .createdAt(notification.getCreatedAt())
                            .build()
                    )
                    .toList()
            );
        } catch (UsernameNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(new MessageResponse(e.getMessage(), HttpStatus.NOT_FOUND));
        }
    }

    @PostMapping("/send")
    public ResponseEntity<MessageResponse> sendNotification(@RequestBody NotificationRequest request) {
        try {
            notificationService.sendNotification(request.content(), request.userId());
            return ResponseEntity.ok(new MessageResponse("Notification successfully sent.", HttpStatus.OK));
        } catch (UsernameNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(new MessageResponse(e.getMessage(), HttpStatus.NOT_FOUND));
        }
    }
}
