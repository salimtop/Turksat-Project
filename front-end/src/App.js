import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Tournaments from "./components/Tournaments";
import Tournament from "./components/Tournament";
import JoinTournament from "./components/JoinTournament";


function App() {
  const isLoggedIn = true;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ?  <Navigate to="/homepage"/> : <Navigate to="/login"/> }/>
          <Route path="/login" element={isLoggedIn ?  <Navigate to="/"/> : <Login/> }/>
          <Route path="/homepage" element={isLoggedIn ?  <Homepage/> : <Navigate to="/login"/> }/>
          <Route path="/tournaments" element={isLoggedIn ?  <Tournaments/> : <Navigate to="/"/> } />
          <Route path="/tournament" element={isLoggedIn ?  <Tournament/> : <Navigate to="/"/> } />
          <Route path="/join" element={isLoggedIn ?  <JoinTournament/> : <Navigate to="/"/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
