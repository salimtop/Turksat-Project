package com.turksat.tournament.user;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Order(value = 2)
@Component
@RequiredArgsConstructor
public class UserConfig implements CommandLineRunner {
    @Autowired
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public void run(String... args) throws Exception {

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
    }
}