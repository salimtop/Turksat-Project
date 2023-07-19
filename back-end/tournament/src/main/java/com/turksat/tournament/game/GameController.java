package com.turksat.tournament.game;

import com.turksat.tournament.team.TeamStanding;
import com.turksat.tournament.tournament.Sport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="/api/v1/game")
public class GameController {
    private final GameService gameService;

    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping("/fixtures")
    public List<Game> getFixtures(
            @RequestHeader("year") Integer year,
            @RequestHeader("sport") Sport sport){
        return gameService.getFixtures(year, sport);
    }

    @GetMapping("/standings")
    public List<TeamStanding> getStandings(
            @RequestHeader("year") Integer year,
            @RequestHeader("sport") Sport sport)
    {
        return gameService.getStandings(year, sport);
    }

}
