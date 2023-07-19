package com.turksat.tournament.team;

import com.turksat.tournament.tournament.Tournament;
import com.turksat.tournament.tournament.TournamentRepository;
import com.turksat.tournament.user.User;
import com.turksat.tournament.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.List;

@Order(value = 3)
@Component
@RequiredArgsConstructor
public class TeamConfig implements CommandLineRunner{
    @Autowired
    private final TeamRepository teamRepository;
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final TournamentRepository tournamentRepository;

    @Override
    public void run(String... args) throws Exception {
        List<User> keepers = userRepository
                .findAllById(
                        List.of(2L,3L));
        Tournament tournament = tournamentRepository
                .findById(1L)
                .orElseThrow(()->new Exception("Tournament NOT found by ID"));

        for (int ind = 0; ind < keepers.size(); ind++) {

            teamRepository.save(
                    new Team(null, "Voley " + ind + 1, tournament, keepers.listIterator().next())
            );
        }

    }
}
