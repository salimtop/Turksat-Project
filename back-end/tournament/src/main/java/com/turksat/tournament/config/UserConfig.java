package com.turksat.tournament.config;

import com.turksat.tournament.user.Role;
import com.turksat.tournament.user.User;
import com.turksat.tournament.user.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Configuration
public class UserConfig {
    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository){
        final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        return args -> {
            User salim = new User(
                    "salimtop@turksat.com.tr",
                    passwordEncoder.encode("1234"),
                    "Salim",
                    "TOP",
                    25,
                    Role.ADMIN
            );

            User amine = new User(
                    "aminedgn1666@gmail.com",
                    passwordEncoder.encode("4567"),
                    "Amine",
                    "TOP",
                    24,
                    Role.USER
            );

            userRepository.saveAll(
                    List.of(salim, amine)
            );
        };
    }
}
