package com.turksat.tournament.tournament;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(uniqueConstraints = @UniqueConstraint(name = "uk_tournament_year", columnNames = {"sport", "year"}))
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tournament {
    @Id
    @GeneratedValue
    private Long tournamentId;
    @Column(nullable = false)
    private Sport sport;
    @Column(nullable = false)
    private Integer year;

}
