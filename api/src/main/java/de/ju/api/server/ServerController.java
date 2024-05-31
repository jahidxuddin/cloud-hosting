package de.ju.api.server;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/server")
@RequiredArgsConstructor
public class ServerController {
    private final ServerService serverService;

    
}
