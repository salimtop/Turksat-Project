import { Navigate, useLocation } from "react-router-dom";

function Tournament() {
    const location = useLocation();

    if (location.state == null) {
       return  <Navigate to="/"/>
    }
    const data = location.state.props;
    
    const fixtures = [
        { match: 'Match 1', team1: 'Team A', team2: 'Team B', score1: 2, score2: 1 },
        { match: 'Match 2', team1: 'Team C', team2: 'Team D', score1: 3, score2: 0 },
        { match: 'Match 3', team1: 'Team E', team2: 'Team F', score1: 1, score2: 1 },
        // Add more fixtures as needed
      ];
    
      return (
        <div>
          <h1>Tournament Page</h1>
          <h2>Fixtures</h2>
          <table>
            <thead>
              <tr>
                <th>Match</th>
                <th>Team 1</th>
                <th>Team 2</th>
                <th>Score 1</th>
                <th>Score 2</th>
              </tr>
            </thead>
            <tbody>
              {fixtures.map((fixture, index) => (
                <tr key={index}>
                  <td>{fixture.match}</td>
                  <td>{fixture.team1}</td>
                  <td>{fixture.team2}</td>
                  <td>{fixture.score1}</td>
                  <td>{fixture.score2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default Tournament;