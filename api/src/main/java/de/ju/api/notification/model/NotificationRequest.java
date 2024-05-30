package de.ju.api.notification.model;

import java.util.UUID;

public record NotificationRequest(String content, UUID userId) {
}
