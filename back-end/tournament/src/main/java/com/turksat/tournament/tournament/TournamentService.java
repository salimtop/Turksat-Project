package com.turksat.tournament.tournament;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TournamentService {
    private final TournamentRepository repository;

    @Autowired
    public TournamentService(TournamentRepository repository) {
        this.repository = repository;
    }
}
