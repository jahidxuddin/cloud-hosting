package de.ju.api.security.model;

public record AuthRegisterRequest(String firstName, String lastName, String email, String password, String roles) {
}
