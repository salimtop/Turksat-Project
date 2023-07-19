package com.turksat.tournament.player;

import com.turksat.tournament.team.Team;
import com.turksat.tournament.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(uniqueConstraints = @UniqueConstraint(name = "uk_team_playerNumber", columnNames = {"team_team_id", "playerNumber"}))
public class Player {
    @Id
    @GeneratedValue
    private Long playerId;
    @ManyToOne
    @JoinColumn(nullable = false)
    private User user;
    @ManyToOne
    @JoinColumn(nullable = false)
    private Team team;
    @JoinColumn(nullable = false)
    private Integer playerNumber;
}
