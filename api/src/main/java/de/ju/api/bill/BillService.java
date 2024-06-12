package de.ju.api.bill;

import de.ju.api.bill.model.BillCreateRequest;
import de.ju.api.exception.EntityNotExistsException;
import de.ju.api.user.AppUser;
import de.ju.api.user.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BillService {
    private final BillRepository repository;
    private final AppUserService userService;

    public void createBill(BillCreateRequest request) throws EntityNotExistsException {
        AppUser user = userService.findUserById(request.userId());

        repository.save(
                Bill.builder()
                        .amount(request.amount())
                        .user(user)
                        .build()
        );
    }
}
