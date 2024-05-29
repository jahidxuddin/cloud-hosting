package de.ju.api.model;

public record AuthRegisterRequest(String email, String password, String roles) {
}
