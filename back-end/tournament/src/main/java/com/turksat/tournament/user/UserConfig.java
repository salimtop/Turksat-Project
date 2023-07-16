package com.turksat.tournament.user;

import jakarta.annotation.PostConstruct;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@AutoConfiguration
public class UserConfig {
    @PostConstruct
    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository){
        final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        return args -> {
            userRepository.saveAll(
                    List.of(
                            new User(
                                    "salimtop@turksat.com.tr",
                                    passwordEncoder.encode("1234"),
                                    "Salim",
                                    "TOP",
                                    25,
                                    Role.ADMIN
                                    ),
                            new User(
                                    "salimtop@gmail.com",
                                    passwordEncoder.encode("1234"),
                                    "Salim",
                                    "TOP",
                                    25,
                                    Role.USER
                                    ),
                            new User(
                                    "aminedgn1666@gmail.com",
                                    passwordEncoder.encode("4567"),
                                    "Amine",
                                    "TOP",
                                    24,
                                    Role.USER
                                    ),
                            new User(
                                    "zekaitop@turksat.com",
                                    passwordEncoder.encode("4567"),
                                    "Zekai",
                                    "TOP",
                                    35,
                                    Role.USER
                                    ),
                            new User(
                                    "ahmetaksa@turksat.com",
                                    passwordEncoder.encode("4567"),
                                    "Ahmet",
                                    "Aksa",
                                    40,
                                    Role.USER
                                    )
                            )
            );
        };
    }
}