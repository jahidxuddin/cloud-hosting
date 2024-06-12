package de.ju.api.notification;

import de.ju.api.exception.EntityNotExistsException;
import de.ju.api.model.MessageResponse;
import de.ju.api.notification.model.NotificationRequest;
import de.ju.api.notification.model.NotificationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/notification")
@RequiredArgsConstructor
public class NotificationController {
    private final NotificationService notificationService;

    @GetMapping("/read-by-token")
    public ResponseEntity<?> getAllNotificationsFromUser(@RequestHeader("Authorization") String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Ungültiger oder fehlender Token.", HttpStatus.UNAUTHORIZED));
        }
        String token = authHeader.substring(7);

        try {
            return ResponseEntity.ok(notificationService.getAllNotificationsFromUser(token).stream().map(notification -> NotificationResponse.builder().id(notification.getId()).content(notification.getContent()).createdAt(notification.getCreatedAt()).build()).toList());
        } catch (EntityNotExistsException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MessageResponse(e.getMessage(), HttpStatus.NOT_FOUND));
        }
    }

    @PostMapping("/send")
    public ResponseEntity<MessageResponse> sendNotification(@RequestBody NotificationRequest request) {
        try {
            notificationService.sendNotification(request.content(), request.userId());
            return ResponseEntity.ok(new MessageResponse("Notification successfully sent.", HttpStatus.OK));
        } catch (EntityNotExistsException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MessageResponse(e.getMessage(), HttpStatus.NOT_FOUND));
        }
    }
}
