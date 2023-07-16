package com.turksat.tournament.team;

import com.turksat.tournament.tournament.Tournament;
import com.turksat.tournament.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Team {
    @Id
    @GeneratedValue
    private Long teamId;
    private String teamName;
    @ManyToOne
    private Tournament tournament;
    @ManyToOne
    private User keeper;

}
