package com.turksat.tournament.tournament;

import jakarta.annotation.PostConstruct;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

import java.util.List;

@AutoConfiguration
public class TournamentConfig {

    @PostConstruct
    @Bean
    CommandLineRunner tournamentCommandLineRunner(TournamentRepository tournamentRepository){
        return args -> {
            tournamentRepository.saveAll(
                    List.of(
                            new Tournament(null,Sport.VOLLEYBALL,2023),
                            new Tournament(null,Sport.FOOTBALL,2023)
                    )
            );
        };
    }
}
