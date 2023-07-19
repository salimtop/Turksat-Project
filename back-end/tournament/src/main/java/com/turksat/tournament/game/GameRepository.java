package com.turksat.tournament.game;


import com.turksat.tournament.tournament.Sport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends JpaRepository<Game,Long> {
        @Query("SELECT g FROM " +
                "Game g INNER JOIN g.team1 te " +
                "INNER JOIN te.tournament tor " +
                "WHERE tor.sport = :sport AND tor.year = :year")
        List<Game> findBySportAndYear(@Param("sport") Sport sport, @Param("year") Integer integer);
}
