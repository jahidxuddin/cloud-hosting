package de.ju.api.security;

import de.ju.api.user.AppUser;
import de.ju.api.user.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AppUserDetailsService implements UserDetailsService {
    private final AppUserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<AppUser> userOptional = userRepository.findByEmail(username);

        if (userOptional.isEmpty()) {
            throw new UsernameNotFoundException("User with the email " + username + " not found.");
        }

        AppUser user = userOptional.get();

        return User.builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .roles(getRoles(user.getRoles()))
                .build();
    }

    private String[] getRoles(String roles) {
        if (roles.isEmpty()) {
            return new String[] { "USER" };
        }

        return roles.split(",");
    }
}
