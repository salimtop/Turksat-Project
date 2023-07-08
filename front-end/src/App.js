import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Login from "./components/Login";
import Homepage from "./components/Homepage";


function App() {
  const isLoggedIn = false;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ?  <Navigate to="/homepage"/> : <Navigate to="/login"/> }/>
          <Route path="/login" element={isLoggedIn ?  <Navigate to="/homepage"/> : <Login/> }/>
          <Route path="/homepage" element={isLoggedIn ?  <Homepage/> : <Navigate to="/login"/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
