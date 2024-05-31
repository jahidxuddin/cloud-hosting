package de.ju.api.security;

import de.ju.api.model.MessageResponse;
import de.ju.api.security.model.AuthLoginRequest;
import de.ju.api.security.model.AuthRegisterRequest;
import de.ju.api.security.model.AuthResponse;
import de.ju.api.user.AppUser;
import de.ju.api.user.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AppUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AppUserDetailsService userDetailsService;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthRegisterRequest request) {
        Optional<AppUser> userOptional = userRepository.findByEmail(request.email());

        if (userOptional.isPresent()) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new MessageResponse("Benutzer existiert bereits.", 400));
        }

        AppUser user = AppUser.builder()
                .firstName(request.firstName())
                .lastName(request.lastName())
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .roles(request.roles())
                .build();

        userRepository.save(user);

        String token = jwtService.generateToken(user);

        return ResponseEntity.ok(new AuthResponse(token));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthLoginRequest request) {
        Optional<AppUser> userOptional = userRepository.findByEmail(request.email());

        if (userOptional.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new MessageResponse("E-Mail oder Passwort ungültig.", 400));
        }

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.email(),
                        request.password()
                )
        );

        String token = jwtService.generateToken(userOptional.get());

        return ResponseEntity.ok(new AuthResponse(token));
    }

    @GetMapping("/verify/{token}")
    public ResponseEntity<MessageResponse> verify(@PathVariable String token) {
        String username = jwtService.extractUsername(token);

        if (username == null) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(new MessageResponse("Benutzer existiert nicht.", HttpStatus.UNAUTHORIZED));
        }

        UserDetails userDetails = userDetailsService.loadUserByUsername(username);

        if (!jwtService.isValid(token, userDetails)) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(new MessageResponse("Token ist ungültig.", HttpStatus.UNAUTHORIZED));
        }

        return ResponseEntity.ok(new MessageResponse("Token ist gültig.", HttpStatus.OK));
    }
}
