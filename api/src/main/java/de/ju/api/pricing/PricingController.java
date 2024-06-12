package de.ju.api.pricing;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/pricing")
@RequiredArgsConstructor
public class PricingController {
    private final PricingService pricingService;

    @GetMapping
    public ResponseEntity<List<Pricing>> getAllPricings() {
        return ResponseEntity.ok(pricingService.getAllPricings());
    }
}
