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
    @Column(nullable = false, unique = true)
    private String teamName;
    @ManyToOne
    @JoinColumn(nullable = false)
    private Tournament tournament;
    @ManyToOne
    @JoinColumn(nullable = false)
    private User keeper;

}
