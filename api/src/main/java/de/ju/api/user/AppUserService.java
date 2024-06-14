package de.ju.api.user;

import de.ju.api.exception.EntityAlreadyExistsException;
import de.ju.api.exception.EntityNotExistsException;
import de.ju.api.security.JwtService;
import de.ju.api.user.model.AccountRequest;
import de.ju.api.user.model.CreditRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AppUserService {
    private final AppUserRepository repository;
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final AppUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public List<AppUser> findAllUser() {
        return repository.findAll();
    }

    public AppUser findUserById(UUID id) throws EntityNotExistsException {
        return repository.findById(id).orElseThrow(() -> new EntityNotExistsException("User not found."));
    }

    public AppUser findUserByToken(String token) throws EntityNotExistsException {
        String username = jwtService.extractUsername(token);

        if (username == null) {
            throw new EntityNotExistsException("Benutzer existiert nicht.");
        }

        UserDetails userDetails = userDetailsService.loadUserByUsername(username);

        if (!jwtService.isValid(token, userDetails)) {
            throw new EntityNotExistsException("Benutzer existiert nicht.");
        }

        return userRepository.findByEmail(username).orElseThrow(() -> new EntityNotExistsException("Benutzer existiert nicht."));
    }

    public String updateCredits(CreditRequest request) throws EntityNotExistsException {
        AppUser user = repository.findById(request.userId()).orElseThrow(() -> new EntityNotExistsException("Benutzer existiert nicht."));
        user.setCredits(user.getCredits() + request.amout());
        repository.save(user);
        return jwtService.generateToken(user);
    }

    public String updateUserAccountByToken(String token, AccountRequest account) throws EntityAlreadyExistsException, EntityNotExistsException {
        AppUser user = findUserByToken(token);

        if (!user.getEmail().equals(account.email())) {
            Optional<AppUser> userOptional = repository.findByEmail(account.email());
            if (userOptional.isPresent()) {
                throw new EntityAlreadyExistsException("Benutzer existiert bereits.");
            }
        }

        user.setFirstName(account.firstName());
        user.setLastName(account.lastName());
        user.setEmail(account.email());
        if (!account.password().isEmpty()) {
            user.setPassword(passwordEncoder.encode(account.password()));
        }

        AppUser updatedUser = repository.save(user);

        return jwtService.generateToken(updatedUser);
    }
}
