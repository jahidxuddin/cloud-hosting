package de.ju.api.model;

import lombok.Builder;

import java.time.LocalDateTime;
import java.util.UUID;

@Builder
public record NotificationResponse(UUID id, String content, LocalDateTime createdAt) {
}
