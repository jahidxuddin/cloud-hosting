package de.ju.api.service;

import de.ju.api.entity.AppUser;
import de.ju.api.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AppUserService {
    private final AppUserRepository repository;

    public List<AppUser> findAllUser() {
        return repository.findAll();
    }
}
