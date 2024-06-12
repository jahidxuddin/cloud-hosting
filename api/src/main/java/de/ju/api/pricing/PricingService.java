package de.ju.api.pricing;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PricingService {
    private final PricingRepository repository;

    public List<Pricing> getAllPricings() {
        return repository.findAll();
    }

    public Optional<Pricing> getPricingByUUID(UUID id) {
        return repository.findById(id);
    }
}
