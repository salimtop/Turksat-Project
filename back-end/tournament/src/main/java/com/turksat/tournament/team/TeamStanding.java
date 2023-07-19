package com.turksat.tournament.team;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeamStanding {
    private Team team;
    private Integer gameNum;
    private Integer won;
    private Integer lost;
    private Integer draw;
    private Integer average;
    private Integer point;

}
