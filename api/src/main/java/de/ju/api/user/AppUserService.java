package de.ju.api.user;

import de.ju.api.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AppUserService {
    private final AppUserRepository repository;
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final AppUserRepository appUserRepository;

    public List<AppUser> findAllUser() {
        return repository.findAll();
    }

    public AppUser findUserById(UUID id) throws UsernameNotFoundException {
        return repository.findById(id).orElseThrow(() -> new UsernameNotFoundException("User not found."));
    }

    public AppUser findUserByToken(String token) throws UsernameNotFoundException {
        String username = jwtService.extractUsername(token);

        if (username == null) {
            throw new UsernameNotFoundException("Benutzer existiert nicht.");
        }

        UserDetails userDetails = userDetailsService.loadUserByUsername(username);

        if (!jwtService.isValid(token, userDetails)) {
            throw new UsernameNotFoundException("Benutzer existiert nicht.");
        }

        return appUserRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("Benutzer existiert nicht."));
    }
}
