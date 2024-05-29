package de.ju.api.model;

import lombok.Builder;

import java.util.UUID;

@Builder
public record UserResponse(UUID uuid, String firstName, String lastName, String email, String roles, double credits) {
}
