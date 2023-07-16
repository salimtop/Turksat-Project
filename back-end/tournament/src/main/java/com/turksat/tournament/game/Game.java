package com.turksat.tournament.game;

import com.turksat.tournament.team.Team;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Game {
    @Id
    @GeneratedValue
    private Long gameId;
    @ManyToOne
    private Team team1;
    @ManyToOne
    private Team team2;
    private String score;
}
