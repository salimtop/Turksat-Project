package com.turksat.tournament.player;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class PlayerConfig {

    @Bean
    CommandLineRunner playerCommandLineRunner(PlayerRepository playerRepository){

//        return args -> {
//            playerRepository.saveAll(
//                    List.of(
//                    )
//            )
//        };
        return null;
    }
}