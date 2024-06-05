package de.ju.api.userServerRelation;

import de.ju.api.model.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        } catch (UsernameNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(new MessageResponse(e.getMessage(), HttpStatus.NOT_FOUND));
        }
    }
}
