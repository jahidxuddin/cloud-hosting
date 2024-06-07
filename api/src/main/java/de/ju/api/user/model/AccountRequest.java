package de.ju.api.user.model;

public record AccountRequest(String firstName, String lastName, String email, String password) {
}
