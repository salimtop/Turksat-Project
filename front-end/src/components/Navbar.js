import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Tournament from "./Tournament";
import navbar_logo from "../assets/turksat-white-logo.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-primary">
            <img className="navbar-brand" src={navbar_logo} height="65px" alt="Company Logo"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/tournaments">Tournaments</Link>
                <Link className="nav-item nav-link" to="/login">My Profile</Link>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;