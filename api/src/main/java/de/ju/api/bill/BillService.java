package de.ju.api.bill;

import de.ju.api.bill.model.BillCreateRequest;
import de.ju.api.bill.model.Cost;
import de.ju.api.exception.EntityNotExistsException;
import de.ju.api.user.AppUser;
import de.ju.api.user.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BillService {
    private final BillRepository repository;
    private final AppUserService userService;

    public List<Cost> getMonthlyCostsFromUser(UUID userId) {
        Month currentMonth = LocalDate.now().getMonth();
        List<Bill> userBills = repository.findAllByUserId(userId);

        List<Bill> billsFromCurrentMonth = userBills.stream().filter(bill -> bill.getCreatedAt().getMonth() == currentMonth).toList();

        Map<Integer, Double> dailyCostsMap = billsFromCurrentMonth.stream().collect(Collectors.groupingBy(bill -> bill.getCreatedAt().getDayOfMonth(), Collectors.summingDouble(Bill::getAmount)));

        return dailyCostsMap.entrySet().stream().map(entry -> new Cost(entry.getKey() + "." + currentMonth.getValue(), entry.getValue())).sorted(Comparator.comparingInt(c -> Integer.parseInt(c.date().split("\\.")[0]))).collect(Collectors.toList());
    }

    public List<Cost> getTotalCostsFromUser(UUID userId) {
        int currentYear = LocalDate.now().getYear();

        List<Bill> userBills = repository.findAllByUserId(userId);

        List<Bill> billsFromCurrentYear = userBills.stream().filter(bill -> bill.getCreatedAt().getYear() == currentYear).toList();

        List<Cost> monthlyCosts = new ArrayList<>();
        for (Month month : Month.values()) {
            double totalAmount = calculateTotalAmountForMonth(billsFromCurrentYear, month);
            if (totalAmount > 0) {
                Cost cost = new Cost(String.valueOf(month.getValue()), totalAmount);
                monthlyCosts.add(cost);
            }
        }

        return monthlyCosts;
    }

    private double calculateTotalAmountForMonth(List<Bill> bills, Month month) {
        return bills.stream().filter(bill -> bill.getCreatedAt().getMonth() == month).mapToDouble(Bill::getAmount).sum();
    }

    public void createBill(BillCreateRequest request) throws EntityNotExistsException {
        AppUser user = userService.findUserById(request.userId());

        repository.save(Bill.builder().amount(request.amount()).user(user).build());
    }
}
