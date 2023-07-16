import React, { useState, useContext, useRef } from "react";
import { Alert } from "react-bootstrap";
import { GetAuthorization } from "../utils/AuthenticationUtils";
import { AuthContext } from "../config/AuthenticationControl";

function SignIn(props){

    const [isLoggedIn, updateLoginStatus ] = useContext(AuthContext);

    const [formData, setFormData] = useState({
                                                email: '',
                                                password: ''
                                            });

    const alerts = {noAlert : undefined,
                    success : <Alert key="success" variant="success">
                                You logged in successfully!
                            </Alert>,
                    fail : <Alert key="danger" variant="danger">
                                Sorry the credentials you are using are invalid.
                            </Alert>
                    }

    const [alertState, setAlertState] = useState("noAlert");

    const handleInputChange = input => {
        const { name, value } = input.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        GetAuthorization(formData, updateLoginStatus);
        setAlertState(isLoggedIn ? "success" : "fail");
        setFormData({
            email:"",
            password:""
        })
    }

    return (
        <>
        {alerts[alertState]}
        <form className="Login-form" onSubmit={submitHandler}>
            <h3 className="Login-form-title">Sign In</h3>
            <div className="form-floating mt-3">
                <input
                    type="email"
                    className="form-control mt-1"
                    id="floatingInput"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <label for="floatingInput">Email Adress</label>
            </div>
            <div className="form-floating mt-3">
                <input
                    type="password"
                    className="form-control mt-1"
                    id="floatingPassword"
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <label for="floatingPassword">Password</label>
            </div>
            <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                    Sign In
                </button>
            </div>
        </form>
        </>
    )
}


function SignUp(props){ 
    const [isLoggedIn, updateLoginStatus ] = useContext(AuthContext);
    const formRef = useRef(null);

    const alerts = {noAlert : undefined,
        success : <Alert key="success" variant="success">
                    You logged in successfully!
                </Alert>,
        fail : <Alert key="danger" variant="danger">
                    Sorry the credentials you are using are invalid.
                </Alert>
        }

    const [alertState, setAlertState] = useState("noAlert");

    const [formData, setFormData] = useState({
        fullname: '',
        dob: '',
        email: '',
        password: '',
        passwordMatch: ''
    });

    const [validity, setValidity] = useState({
        passwordMissmatch : false,
        invalidEmailFormat : false,
        invalidDob : false
    })

    const checkPasswordMissmatch = (passwordMatch) => {
        const {password} = formData;

        const missMatch = (!!password.localeCompare(passwordMatch))
                        && passwordMatch.length > 0
                        && password.length > 0;

        setValidity(prevState => ({
            ...prevState,
            passwordMissmatch : missMatch
        }));
    }

    const checkInvalidEmailFormat = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid =  emailPattern.test(email)
                    && !email.endsWith("@turksat.com.tr")
                    && email.length > 0;

        setValidity(prevState => ({
            ...prevState,
            invalidEmailFormat : isValid
        }));
    }

    const checkInvalidDob = (dob) => {
        const currentYear = new Date().getFullYear();
        const birthYear = new Date(dob).getFullYear();
        const isValid = currentYear - birthYear < 18;

        setValidity(prevState => ({
            ...prevState,
            invalidDob : isValid
        }));
    }

    const handleInputChange = input => {
        const { name, value } = input.target;

        setFormData(prevState => (
            {
                ...prevState,
                [name]: value
            }
        ));

        switch(name){
            case "passwordMatch" : checkPasswordMissmatch(value);
            break;
            case "email" : checkInvalidEmailFormat(value);
            break;
            case "dob" : checkInvalidDob(value);
            break;
            default: break;
        }
    };


    const {
        fullname,
        dob,
        email,
        password
    } = formData;

    const names = fullname.split(" ");
    const surname = names.pop();
    const name = names.join(" ");
    const age = new Date().getFullYear() - new Date(dob).getFullYear();
    const user = {firstname:name, lastname:surname, age, email, password};


    const handleSubmitButton = (event) => {
        if(!formRef.current.checkValidity()){
            formRef.current.reportValidity();
            return;
        }
        event.preventDefault()
        const allValid = Object.values(validity).every(value => value !== true)
        allValid &&  GetAuthorization(user, updateLoginStatus);
        setAlertState(isLoggedIn ? "success" : "fail");
        setFormData(prevState => ({
            ...prevState,
            email : validity.invalidEmailFormat ? "" : prevState.email,
            password : validity.passwordMissmatch ? "" : prevState.password,
            passwordMatch : validity.passwordMissmatch ? "" : prevState.passwordMatch
        }))
    }

    return (
        <form className="Login-form" ref={formRef}>
        <div className="Login-form-content">
            <h3 className="Login-form-title">Sign Up</h3>
            <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="e.g. Salim Top"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-group mt-3">
                <label>Email Address</label>
                <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="e.g. s.top@turksat.com.tr"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                /> 
                {validity.invalidEmailFormat && <span style={{color:"red"}}>You must register with company mail!</span>}
            </div>
            <div class="form-group mt-3">
            <label>Date Of Birth</label>
                <input
                     className="form-control mt-1" 
                     type="date"
                     name="dob"
                     value={formData.dob}
                     onChange={handleInputChange}
                     required
                />
                {validity.invalidDob && <span style={{color:"red"}}>You must be at least 18 years old!</span>}
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Type Password"
                    name="password"
                    minLength="8"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-group mt-3">
                <label>Retype Password</label>
                <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Retype Password"
                    minLength="8"
                    name="passwordMatch"
                    value={formData.passwordMatch}
                    onChange={handleInputChange}
                    required
                />
                {validity.passwordMissmatch && <span style={{color:"red"}}>Passwords you entered does not match!</span>}
            </div>
            <div className="d-grid gap-2 mt-3">
                <button type="button" onClick={handleSubmitButton} className="btn btn-primary">
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