package de.ju.api.userServerRelation.model;

import java.util.UUID;

public record UserServerRelationDeleteRequest(String token, UUID serverId) {
}
