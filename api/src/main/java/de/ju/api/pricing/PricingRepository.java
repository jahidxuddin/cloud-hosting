package de.ju.api.pricing;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PricingRepository extends JpaRepository<Pricing, UUID> {
}
