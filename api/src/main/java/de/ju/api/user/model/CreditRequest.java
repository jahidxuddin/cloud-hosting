package de.ju.api.user.model;

import java.util.UUID;

public record CreditRequest(double amout, UUID userId) {
}
