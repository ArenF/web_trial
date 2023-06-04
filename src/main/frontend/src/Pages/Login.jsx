import React, { useState } from "react";
import { ImageBox } from "./Component/BoxForm";
import { loginWithEmail } from "./Component/LoginForm";

import '../CSS/LoginPage/login-form.css';


function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const saveEmail = event => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }
    
    const savePassword = event => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    function register() {
        loginWithEmail(email, password);
    }

    return (
        <ImageBox image='/resources/camera.jpg' width='100vw' height='100vh'>
            <div className="form">
                <p className="form-title">Sign in to your account</p>
                <div className="input-container">
                   <input onChange={saveEmail} type="email" placeholder="Enter Email"/>
                   <span>
                   </span>
                </div>
                <div className="input-container">
                   <input onChange={savePassword} type="password" placeholder="Enter Password"/>
                </div>
                <button onClick={register} class="submit">
                    Sign in
                </button>

                <p className="signup-link">
                 No account? <a href="#">Sign up</a>
                </p>
            </div>
        </ImageBox>
    );
}

export default function App() {
    return(
        <div>
            <LoginForm />
        </div>
    );
}