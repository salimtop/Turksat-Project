package com.turksat.tournament.game;

import com.turksat.tournament.team.Team;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

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
    @JoinColumn(nullable = false)
    private Team team1;
    @ManyToOne
    @JoinColumn(nullable = false)
    private Team team2;
    @Column(nullable = false)
    private LocalDate date;
    @Column(nullable = true)
    private String score;

    @PrePersist
    @PreUpdate
    private void sameTeamConstraint() {
        if (team1.getTeamId().equals(team2.getTeamId())) {
            throw new IllegalArgumentException(team1.getTeamName() + " cannot play match itself!");
        }
    }
}
