package de.ju.api.userServerRelation;

import de.ju.api.exception.EntityNotExistsException;
import de.ju.api.model.MessageResponse;
import de.ju.api.userServerRelation.model.UserServerRelationDeleteRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("api/v1/user-server")
@RequiredArgsConstructor
public class UserServerController {
    private final UserServerService userServerService;

    @GetMapping("/server-from/{userId}")
    public ResponseEntity<?> getAllServerFromUser(@PathVariable("userId") UUID userId) {
        try {
            return ResponseEntity.ok(userServerService.getAllServerFromUser(userId));
        } catch (EntityNotExistsException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MessageResponse(e.getMessage(), HttpStatus.NOT_FOUND));
        }
    }

    @GetMapping("/server-by-token")
    public ResponseEntity<?> getAllServerFromUser(@RequestHeader("Authorization") String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Ungültiger oder fehlender Token.", HttpStatus.UNAUTHORIZED));
        }
        String token = authHeader.substring(7);

        try {
            return ResponseEntity.ok(userServerService.getAllServerFromUser(token));
        } catch (EntityNotExistsException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MessageResponse(e.getMessage(), HttpStatus.NOT_FOUND));
        }
    }

    @DeleteMapping("/remove")
    public ResponseEntity<MessageResponse> removeUserServerRelation(@RequestBody UserServerRelationDeleteRequest request) {
        try {
            userServerService.removeUserServerRelation(request);
            return ResponseEntity.ok(new MessageResponse("User Server Beziehung erfolgreich beendet", HttpStatus.OK));
        } catch (EntityNotExistsException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MessageResponse(e.getMessage(), HttpStatus.NOT_FOUND));
        }
    }
}
