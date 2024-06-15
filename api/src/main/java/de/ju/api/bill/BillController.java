package de.ju.api.bill;

import de.ju.api.bill.model.Cost;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/bill")
@RequiredArgsConstructor
public class BillController {
    private final BillService billService;

    @GetMapping("/monthly-costs/{userId}")
    public ResponseEntity<List<Cost>> getMonthlyCostsFromUser(@PathVariable UUID userId) {
        return ResponseEntity.ok(billService.getMonthlyCostsFromUser(userId));
    }

    @GetMapping("/total-costs/{userId}")
    public ResponseEntity<List<Cost>> getTotalCostsFromUser(@PathVariable UUID userId) {
        return ResponseEntity.ok(billService.getTotalCostsFromUser(userId));
    }
}
