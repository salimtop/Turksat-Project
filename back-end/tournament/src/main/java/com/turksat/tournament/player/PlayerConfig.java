package com.turksat.tournament.player;

import com.turksat.tournament.team.Team;
import com.turksat.tournament.team.TeamRepository;
import com.turksat.tournament.user.User;
import com.turksat.tournament.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class PlayerConfig implements CommandLineRunner{
    @Autowired
    private final PlayerRepository playerRepository;
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final TeamRepository teamRepository;

    @Override
    public void run(String... args) throws Exception {
        List<User> users = userRepository
                .findAllById(List.of(2L,3L));
        Team team = teamRepository
                .findById(1L)
                .orElseThrow(()->new Exception("Team NOT found by ID"));

        Integer lastPlayerNumber = 10;

        for (User user:
             users) {
            playerRepository.save(new Player(null, user, team, lastPlayerNumber++));
        }

    }
}