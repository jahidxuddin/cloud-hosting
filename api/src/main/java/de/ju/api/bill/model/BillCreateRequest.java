package de.ju.api.bill.model;

import java.util.UUID;

public record BillCreateRequest(double amount, UUID userId) {
}
