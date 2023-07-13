import { Navigate, useLocation } from "react-router-dom";
import { Table } from "react-bootstrap";

function Standings() {
  const standings = [
    {teamName: "Fenerbahçe", played: 10, won: 8, lost: 1, draw: 0, average: 19, point: 25},
    {teamName: "Beşiktaş", played: 10, won: 7, lost: 2, draw: 0, average: 19, point: 29}
  ];

  standings.sort((a,b) => a.point > b.point);

  return (
      <Table striped bordered hover>
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

function Tournament() {
    const location = useLocation();

    if (location.state == null) {
       return  <Navigate to="/"/>
    }
    const data = location.state.props;
    
    return (
      <Standings/>
    )
    
}

export default Tournament;