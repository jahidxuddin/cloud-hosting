package de.ju.api.controller;

import de.ju.api.model.UserResponse;
import de.ju.api.service.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
public class AppUserController {
    private final AppUserService userService;

    @GetMapping
    public ResponseEntity<List<UserResponse>> getAllUser() {
        return ResponseEntity.ok(
                userService.findAllUser().stream().map(user ->
                        UserResponse.builder()
                                .uuid(user.getId())
                                .firstName(user.getFirstName())
                                .lastName(user.getLastName())
                                .email(user.getEmail())
                                .roles(user.getRoles())
                                .credits(user.getCredits())
                                .build()
                ).toList()
        );
    }
}
