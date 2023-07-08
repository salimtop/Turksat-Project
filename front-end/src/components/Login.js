import React, { useState } from "react"

function SignIn(props){
    return (
        
        <form className="Login-form">
            <h3 className="Login-form-title">Sign In</h3>
            <div className="form-group mt-3">
                <label>Email adress</label>
                <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                />
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                />
            </div>
            <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                    Sign In
                </button>
            </div>
        </form>
    )
}

function SignUp(props){
    return (
        <form className="Login-form">
        <div className="Login-form-content">
            <h3 className="Login-form-title">Sign Up</h3>
            <div className="form-group mt-3">
            <label>Full Name</label>
            <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g. Salim Top"
            />
            </div>
            <div className="form-group mt-3">
            <label>Email Address</label>
            <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g. s.top@turksat.com.tr"
            />
            </div>
            <div className="form-group mt-3">
            <label>Password</label>
            <input
                type="password"
                className="form-control mt-1"
                placeholder="Type Password"
            />
            </div>
            <div className="form-group mt-3">
            <label>Retype Password</label>
            <input
                type="password"
                className="form-control mt-1"
                placeholder="Retype Password"
            />
            </div>
            <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
                Sign Up
            </button>
            </div>
        </div>
        </form>
    )
}

function Login(props) {
    const [toggleTab, setToggleTab] = useState(1);

    const toggleTabHandler = (index) => {
        setToggleTab(index);
    }

    return <div>
        <div className="Login-page-container">
            <div className="Login-forms">
                <div className="Login-tabs">
                    <button
                        className={toggleTab === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTabHandler(1)}
                    >
                        Sign In
                    </button>
                    <button
                        className={toggleTab === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTabHandler(2)}
                    >
                        Sign Up
                    </button>
                </div>
                {toggleTab === 1 ? <SignIn/> : <SignUp/> }
            </div>
        </div>
    </div>;
};

export default Login;