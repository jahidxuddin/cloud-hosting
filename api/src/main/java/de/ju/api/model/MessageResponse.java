package de.ju.api.model;

import org.springframework.http.HttpStatus;

public record MessageResponse(String message, int statusCode) {
    public MessageResponse(String message, HttpStatus statusCode) {
        this(message, statusCode.value());
    }
}
