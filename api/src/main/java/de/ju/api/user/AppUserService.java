package de.ju.api.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AppUserService {
    private final AppUserRepository repository;

    public List<AppUser> findAllUser() {
        return repository.findAll();
    }

    public AppUser findUserById(UUID id) throws UsernameNotFoundException {
        return repository.findById(id).orElseThrow(() -> new UsernameNotFoundException("User not found."));
    }
}
