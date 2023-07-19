package com.turksat.tournament.game;

import com.turksat.tournament.team.Team;
import com.turksat.tournament.team.TeamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
@RequiredArgsConstructor
public class GameConfig implements CommandLineRunner {
    @Autowired
    private final TeamRepository teamRepository;
    @Autowired
    private final GameRepository gameRepository;

    @Override
    public void run(String... args) throws Exception {
        Team team1 = teamRepository
                .findById(1L)
                .orElseThrow(()->new Exception("Team not found by ID!"));
        Team team2 = teamRepository
                .findById(2L)
                .orElseThrow(()->new Exception("Team not found by ID!"));
        LocalDate date = LocalDate.of(2023, 8, 29);
        gameRepository.save(new Game(null, team1, team2, date, null));

    }
}
