package com.turksat.tournament.player;

import com.turksat.tournament.team.Team;
import com.turksat.tournament.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Player {
    @Id
    @GeneratedValue
    private Long playerId;
    @ManyToOne
    private User user;
    @ManyToOne
    private Team team;
    private Integer playerNumber;
}
