package de.ju.api.server;

import de.ju.api.exception.EntityAlreadyExistsException;
import de.ju.api.exception.EntityNotExistsException;
import de.ju.api.pricing.Pricing;
import de.ju.api.pricing.PricingService;
import de.ju.api.server.model.ServerStatusRequest;
import de.ju.api.server.model.ServerRentRequest;
import de.ju.api.user.AppUser;
import de.ju.api.user.AppUserService;
import de.ju.api.userServerRelation.UserServerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ServerService {
    private final ServerRepository repository;
    private final AppUserService userService;
    private final PricingService pricingService;
    private final UserServerService userServerService;

    public void rentServer(ServerRentRequest request) throws EntityAlreadyExistsException, EntityNotExistsException {
        AppUser user = userService.findUserById(request.userId());

        Optional<Pricing> pricingOptional = pricingService.getPricingByUUID(request.pricingId());
        if (pricingOptional.isEmpty()) {
            throw new EntityNotExistsException("Die Preisgestaltung existiert nicht.");
        }

        Pricing pricing = pricingOptional.get();

        Server server = Server.builder().name(request.name()).storage(1).price(pricing.getPrice()).build();

        repository.save(server);

        userServerService.addUserServerRelation(user, server);
    }

    public void updateServerStatus(UUID uuid, ServerStatusRequest request) throws EntityNotExistsException {
        Optional<Server> serverOptional = repository.findById(uuid);
        if (serverOptional.isEmpty()) {
            throw new EntityNotExistsException("Server existiert nicht.");
        }

        Server updatedServer = serverOptional.get();
        updatedServer.setStatus(request.status());

        repository.save(updatedServer);
    }
}
