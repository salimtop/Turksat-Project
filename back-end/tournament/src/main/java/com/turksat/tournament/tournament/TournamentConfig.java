package com.turksat.tournament.tournament;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.List;

@Order(value = 1)
@Component
@RequiredArgsConstructor
public class TournamentConfig implements CommandLineRunner{
    @Autowired
    private final TournamentRepository tournamentRepository;

    @Override
    public void run(String... args) throws Exception {
        tournamentRepository.saveAll(
                List.of(
                        new Tournament(null,Sport.VOLLEYBALL,2023),
                        new Tournament(null,Sport.FOOTBALL,2023)
                )
        );

    }
}
