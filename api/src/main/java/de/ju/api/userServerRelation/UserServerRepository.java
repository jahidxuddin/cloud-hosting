package de.ju.api.userServerRelation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface UserServerRepository extends JpaRepository<UserServerRelation, UserServerKey> {
    List<UserServerRelation> findAllByUserId(UUID userId);
}
