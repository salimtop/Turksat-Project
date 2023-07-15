import BaskatballImg from "../assets/baskatball.png";
import VolleyballImg from "../assets/volleyball.png";
import FootballImg from "../assets/football.png";
import Navbar from "./Navbar";

import {useNavigate} from "react-router-dom"

function TournamentCard(props) {
    
    const navigate = useNavigate();

    const cardClickHandler = () => {
        navigate("/tournament", {state: {props}})
    }

    const joinClickHandler = () => {
        navigate("/join", {state: {props}})
    }

    const editClickHandler = () => {
        navigate("/tournament-admin", {state: {props}})
    }

    const canEdit = true;
    const canJoin = true && props.isActive;
    
    const className = "card Tournament-card  " + (!props.isActive ? "inactive-card" : "active-card");
    return (
        <div className={className}>
            <button className="button-card" onClick={cardClickHandler}>
                    <img src={props.imgSrc} className="card-img-top" style={{height:"200px", width:"255px"}}  alt="Basketball illusturation"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    */}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Total Teams : {props.totalTeamCount}</li>
                    <li className="list-group-item">Total Player : {props.totalPlayerCount}</li>
                    <li className="list-group-item">Register Due Date : {props.registerDate}</li>
                </ul>
            </button>
            {   
                (canEdit || canJoin) ? (
                    
                <div className="card-buttons">
                    {(canEdit && <button type="button" className="card-link btn btn-primary" onClick={editClickHandler}>Edit</button>)}
                    {(canJoin && <button type="button" className="card-link btn btn-primary" onClick={joinClickHandler}>Join</button>)}
                </div>
                )
                : undefined    
            }
            
        </div>
    )
}

const YearSelector = () => {

    const style = {width:"100%", textAlign:"center"};
    const years = [2023,2022,2021];
    years.sort((a,b) => b-a);

    console.log(years)
  
    return (
        <select defaultValue={years[0]} className="form-select" style={style}>
            {years.map((year, index) => {
                                       return <option value={year}>{year}</option>
                                    })
            }
        </select>
    );
  };

function Tournaments() {
    const cardParams = {
        basketball : {
            isActive : true,
            imgSrc : BaskatballImg,
            title : "Basketball Tournament",
            playerPerTeam: 5,
            totalTeamCount : 10,
            totalPlayerCount : 50,
            registerDate : new Date().toDateString()
        },
        football : {
            isActive : false,
            imgSrc : FootballImg,
            title : "Football Tournament",
            playerPerTeam: 11,
            totalTeamCount : 10,
            totalPlayerCount : 110,
            registerDate : new Date().toDateString()
        }, 
       volleyball : {
            isActive : true,
            imgSrc : VolleyballImg,
            title : "Volleyball Tournament",
            playerPerTeam: 5,
            totalTeamCount : 10,
            totalPlayerCount : 50,
            registerDate : new Date().toDateString()
        },
    }

    return (
        <>
            <Navbar />
            <div className="Tournaments-container">
                <YearSelector/>
                <div className="Tournaments-cards">
                    <TournamentCard {...cardParams.basketball}/>
                    <TournamentCard {...cardParams.football}/>
                    <TournamentCard {...cardParams.volleyball}/>
                </div>
            </div>
        </>
    );
}

export default Tournaments;