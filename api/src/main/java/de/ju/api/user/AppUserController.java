package de.ju.api.user;

import de.ju.api.model.MessageResponse;
import de.ju.api.user.model.UserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
public class AppUserController {
    private final AppUserService userService;

    @GetMapping
    public ResponseEntity<List<UserResponse>> getAllUser() {
        return ResponseEntity.ok(userService.findAllUser().stream().map(user -> UserResponse.builder().uuid(user.getId()).firstName(user.getFirstName()).lastName(user.getLastName()).email(user.getEmail()).roles(user.getRoles()).credits(user.getCredits()).build()).toList());
    }

    @GetMapping("/token")
    public ResponseEntity<?> getUserByToken(@RequestHeader("Authorization") String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(new MessageResponse("Ungültiger oder fehlender Token.", HttpStatus.UNAUTHORIZED));
        }
        String token = authHeader.substring(7);
        try {
            AppUser user = userService.findUserByToken(token);
            return ResponseEntity.ok(
                    UserResponse.builder()
                            .uuid(user.getId())
                            .firstName(user.getFirstName())
                            .lastName(user.getLastName())
                            .email(user.getEmail())
                            .roles(user.getRoles())
                            .credits(user.getCredits())
                            .build()
            );
        } catch (UsernameNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(new MessageResponse(e.getMessage(), HttpStatus.NOT_FOUND));
        }
    }
}
