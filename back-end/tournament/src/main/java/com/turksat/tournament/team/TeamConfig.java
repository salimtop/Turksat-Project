package com.turksat.tournament.team;

import com.turksat.tournament.tournament.Tournament;
import com.turksat.tournament.tournament.TournamentConfig;
import com.turksat.tournament.tournament.TournamentRepository;
import com.turksat.tournament.user.User;
import com.turksat.tournament.user.UserConfig;
import com.turksat.tournament.user.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@AutoConfiguration
@AutoConfigureAfter({UserConfig.class, TournamentConfig.class})
public class TeamConfig {

    @Bean
    @PostConstruct
    CommandLineRunner teamCommandLineRunner(TeamRepository teamRepository,
                                            UserRepository userRepository,
                                            TournamentRepository tournamentRepository){

        return args -> {
            User keeper = userRepository
                                        .findById(2L)
                                        .orElseThrow(()-> new Exception("User NOT found by ID!"));
            Tournament tournament = tournamentRepository
                                                        .findById(1L)
                                                        .orElseThrow(()->new Exception("Tournament NOT found by ID"));
            teamRepository.save(
                    new Team(null, "Voley 1", tournament, keeper)
            );
        };
    }
}
