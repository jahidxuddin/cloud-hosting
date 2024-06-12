package de.ju.api.server.model;

import java.util.UUID;

public record ServerRentRequest(String name, UUID pricingId, UUID userId) {
}
