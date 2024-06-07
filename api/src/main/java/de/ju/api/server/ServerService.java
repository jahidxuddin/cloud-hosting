package de.ju.api.server;

import de.ju.api.server.model.ServerStatusRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ServerService {
    private final ServerRepository serverRepository;

    public void updateServerStatus(UUID uuid, ServerStatusRequest request) {
        Optional<Server> serverOptional = serverRepository.findById(uuid);
        if (serverOptional.isEmpty()) {
            throw new ServerNotFoundException("Server existiert nicht.");
        }

        Server updatedServer = serverOptional.get();
        updatedServer.setStatus(request.status());

        serverRepository.save(updatedServer);
    }
}
