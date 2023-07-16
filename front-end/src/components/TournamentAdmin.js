import { Navigate, useLocation } from "react-router-dom";
import { Table, Accordion } from "react-bootstrap";
import Navbar from "./Navbar"
import { useState } from "react";

function Standings() {
  const standings = [
    {teamName: "Fenerbahçe", played: 10, won: 8, lost: 1, draw: 0, average: 19, point: 25},
    {teamName: "Beşiktaş", played: 10, won: 7, lost: 2, draw: 0, average: 19, point: 22},
    {teamName: "Beşiktaş", played: 10, won: 7, lost: 2, draw: 0, average: 19, point: 22},
    {teamName: "Beşiktaş", played: 10, won: 7, lost: 2, draw: 0, average: 19, point: 22},
    {teamName: "Beşiktaş", played: 10, won: 7, lost: 2, draw: 0, average: 19, point: 22},
    {teamName: "Beşiktaş", played: 10, won: 7, lost: 2, draw: 0, average: 19, point: 22},
    {teamName: "Beşiktaş", played: 10, won: 7, lost: 2, draw: 0, average: 19, point: 22},
    {teamName: "Beşiktaş", played: 10, won: 7, lost: 2, draw: 0, average: 19, point: 22},
    {teamName: "Beşiktaş", played: 10, won: 7, lost: 2, draw: 0, average: 19, point: 22},
  ];

  standings.sort((a,b) => b.point - a.point);

  console.log(standings)

  return (
      <Table vr hover className="Standings">
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Draw</th>
            <th>Average</th>
            <th>Points</th>
          </tr>
        </thead> 
        <tbody>
          {
            standings.map((standing, index) => {
              return (
              <tr>
                <td>{index+1}</td>
                <td>{standing.teamName}</td>
                <td>{standing.played}</td>
                <td>{standing.won}</td>
                <td>{standing.lost}</td>
                <td>{standing.draw}</td>
                <td>{standing.average}</td>
                <td>{standing.point}</td>
            </tr>
              )
            } )
          }
        </tbody>
      </Table>
  );
}

function Fixtures() {
  const matches = [
    {date: new Date("2024-03-01").toLocaleDateString(), team1:"BJK", team2:"FB", team1Score: 1, team2Score:0, time:"21:00"},
    {date: new Date("2020-03-01").toLocaleDateString(), team1:"GS", team2:"TS", team1Score: 5, team2Score:0, time:"19:00"},
    {date: new Date("2020-03-01").toLocaleDateString(), team1:"MAN CITY", team2:"ÇFK", team1Score: 1, team2Score:3, time:"20:00"},
  ]

  matches.sort((match1, match2) => {
    const date1 = new Date(match1.date).getTime();
    const date2 = new Date(match2.date).getTime();

    return date1 === date2 ? match1.time.localeCompare(match2.time) : (date1 > date2)*2-1
  })


  const teams = ["BJK", "FB", "GS", "TS"];

    const selectTeam =( <select className="Fixture-team" name="teams" id="team" defaultValue="initial">
                            <option disabled={true} value="initial">Select Team</option>
                            {
                                teams.map((team) => {
                                    return <option value={team.toLocaleLowerCase().replace(" ","-")}>{team.toLocaleUpperCase()}</option>        
                                })
                            }
                        </select>)

    
    const [fixtureEdit, setFixtureEdit] = useState(null);



  return (
    <form className="Fixture-container">
            {
            matches.map((match) => {
            return (<tr className="Fixture">
                <td>
                    <input className="form-control Fixture-date" id="date" name="date" type="datetime-local"/>
                </td>
                <td style={{textAlign:"end"}}>{selectTeam}</td>
                <td >
                    <input className="Fixture-score" type="number" id="tentacles" name="tentacles" min="0" max="100"/>
                        -
                    <input className="Fixture-score" type="number" id="tentacles" name="tentacles" min="0" max="100"/>
                </td>
                <td className="Fixture-team" style={{textAlign:"start"}}>{selectTeam}</td>
            </tr>)
            })
        }
    </form>
  )
}

function Teams(){
  const teams = [
    {teamName: "ÇFK", players:[{playerNum: 10, playerName:"Salim", playerSurname:"TOP", playerAge: 25}]},
    {teamName: "Fenerbahçe SK", players:[{playerNum: 10, playerName:"Salim", playerSurname:"TOP", playerAge: 25}]},
  ];

  return (
    <>
    <Accordion className="Teams">
      {
        teams.map((team, index) => {
          return (
            <Accordion.Item eventKey={index.toString()}>
              <Accordion.Header>{team.teamName}</Accordion.Header>
              <Accordion.Body>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Surname</th>
                      <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      team.players.map((player)=>{  
                        return (
                          <tr>
                            <td>{player.playerNum}</td>
                            <td>{player.playerName}</td>
                            <td>{player.playerSurname}</td>
                            <td>{player.playerAge}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </Accordion.Body>
          </Accordion.Item>
          )
        })
      }
    </Accordion>
    </>
  )
}

function TournamentAdmin() {
    const location = useLocation();

    if (location.state == null) {
       return  <Navigate to="/"/>
    }
    const data = location.state.props;
    
    return (
      <>
      <Navbar/>
      <div className="Tournament-container">  
        <Teams/>
        <Fixtures/>
      </div>
      </>
    )
    
}

export default TournamentAdmin;