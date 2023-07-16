import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { AuthContext } from "./config/AuthenticationControl";
import { useContext } from "react";
import Login from "./components/Login";
import Tournaments from "./components/Tournaments";
import Tournament from "./components/Tournament";
import JoinTournament from "./components/JoinTournament";
import TournamentAdmin from "./components/TournamentAdmin";

function App() {
  const [isLoggedIn ] = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ?  <Navigate to="/tournaments"/> : <Navigate to="/login"/> }/>
          <Route path="/login" element={isLoggedIn ?  <Navigate to="/"/> : <Login/> }/>
          <Route path="/tournaments" element={isLoggedIn ?  <Tournaments/> : <Navigate to="/"/> } />
          <Route path="/tournament" element={isLoggedIn ?  <Tournament/> : <Navigate to="/"/> } />
          <Route path="/join" element={isLoggedIn ?  <JoinTournament/> : <Navigate to="/"/> } />
          <Route path="/tournament-admin" element={isLoggedIn ?  <TournamentAdmin/> : <Navigate to="/"/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
