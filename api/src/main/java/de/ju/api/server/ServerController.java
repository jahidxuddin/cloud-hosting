package de.ju.api.server;

import de.ju.api.exception.EntityAlreadyExistsException;
import de.ju.api.exception.EntityNotExistsException;
import de.ju.api.model.MessageResponse;
import de.ju.api.server.exception.NotEnoughCreditsException;
import de.ju.api.server.model.ServerStatusRequest;
import de.ju.api.server.model.ServerRentRequest;
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

    @PostMapping("/rent")
    public ResponseEntity<?> rentServer(@RequestBody ServerRentRequest request) {
        try {
            return ResponseEntity.ok(serverService.rentServer(request));
        } catch (NotEnoughCreditsException e) {
            return ResponseEntity.status(HttpStatus.PAYMENT_REQUIRED).body(new MessageResponse(e.getMessage(), HttpStatus.PAYMENT_REQUIRED));
        } catch (EntityNotExistsException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MessageResponse(e.getMessage(), HttpStatus.NOT_FOUND));
        } catch (EntityAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MessageResponse(e.getMessage(), HttpStatus.BAD_REQUEST));
        }
    }

    @PutMapping("/status/{serverId}")
    public ResponseEntity<MessageResponse> updateServerStatus(@PathVariable UUID serverId, @RequestBody ServerStatusRequest request) {
        try {
            serverService.updateServerStatus(serverId, request);
            return ResponseEntity.ok(new MessageResponse("Serverstatus erfolgreich geupdated.", HttpStatus.OK));
        } catch (EntityNotExistsException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MessageResponse(e.getMessage(), HttpStatus.NOT_FOUND));
        }
    }
}
