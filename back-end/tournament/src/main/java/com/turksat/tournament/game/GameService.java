package com.turksat.tournament.game;

import com.turksat.tournament.team.TeamStanding;
import com.turksat.tournament.tournament.Sport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GameService {
    private final GameRepository gameRepository;

    @Autowired
    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public List<Game> getFixtures(Integer year, Sport sport){
        List<Game> games = gameRepository.findBySportAndYear(sport, year);
        games.sort(Comparator.comparing(Game::getDate));

        return games;
    }

    public List<TeamStanding> getStandings(Integer year, Sport sport){
        List<Game> games = gameRepository.findBySportAndYear(sport, year);
        HashMap<Long, TeamStanding> standings = new HashMap<>();
        games
                .stream()
                .filter(game -> game.getScore() != null)
                .forEach(game -> {
                    var team1 = game.getTeam1();
                    var team2 = game.getTeam2();
                    var score = game.getScore();
                    var goals = Arrays
                            .stream(score.split("-"))
                            .map(goal -> Integer.parseInt(goal.trim()))
                            .collect(Collectors.toList());

                    Integer gameResult = goals.get(0).compareTo(goals.get(1));

                    standings.putIfAbsent(team1.getTeamId(),
                            new TeamStanding(team1, 0,0,0,0,0,0));
                    standings.putIfAbsent(team2.getTeamId(),
                            new TeamStanding(team2, 0,0,0,0,0,0));

                    TeamStanding team1Standing = standings.get(team1.getTeamId());
                    team1Standing.setGameNum(team1Standing.getGameNum()+1);
                    team1Standing.setAverage(team1Standing.getAverage()+goals.get(0));

                    TeamStanding team2Standing = standings.get(team2.getTeamId());
                    team2Standing.setGameNum(team2Standing.getGameNum()+1);
                    team2Standing.setAverage(team2Standing.getAverage()+goals.get(1));

                    switch (gameResult){
                        case -1:
                            team1Standing.setWon(team1Standing.getWon()+1);
                            break;
                        case 0:
                            team1Standing.setDraw(team1Standing.getDraw()+1);
                            team2Standing.setDraw(team2Standing.getDraw()+1);
                            break;
                        case 1:
                            team2Standing.setWon(team2Standing.getWon()+1);
                            break;
                        default:
                            break;
                    }
                });
        return standings
                .values()
                .stream()
                .sorted(Comparator.comparing(TeamStanding::getPoint))
                .collect(Collectors.toList());
    }
}
