package de.ju.api.server;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ServerService {
    private final ServerRepository serverRepository;

    public List<Server> getAllServerFromUser() {
        return serverRepository.findAll();
    }
}
