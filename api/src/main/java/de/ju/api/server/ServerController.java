package de.ju.api.server;

import de.ju.api.model.MessageResponse;
import de.ju.api.server.model.ServerStatusRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("api/v1/server")
@RequiredArgsConstructor
public class ServerController {
    private final ServerService serverService;

    @PutMapping("/status/{serverId}")
    public ResponseEntity<MessageResponse> updateServerStatus(@PathVariable UUID serverId, @RequestBody ServerStatusRequest request) {
        try {
            serverService.updateServerStatus(serverId, request);
            return ResponseEntity.ok(new MessageResponse("Serverstatus erfolgreich geupdated.", HttpStatus.OK));
        } catch (ServerNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MessageResponse(e.getMessage(), HttpStatus.NOT_FOUND));
        }
    }
}
