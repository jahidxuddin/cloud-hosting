package de.ju.api.model;

import java.util.UUID;

public record NotificationRequest(String content, UUID userId) {
}
