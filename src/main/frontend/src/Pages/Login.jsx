import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebase";


import '../CSS/LoginPage/login-form.css';

class ImageBackground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image
        }
    }

    render() {
        const styleMessage = {
            background: 'url(' + this.state.image + ')',
            backgroundRepeat: 'no-repeat'
          };

        return (
            <div className="login-background" style={styleMessage}>
                {this.props.children}
            </div>
        );
    }
}


function LoginForm() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const saveEmail = event => {
        setRegisterEmail(event.target.value);
        console.log(event.target.value);
    }
    
    const savePassword = event => {
        setRegisterPassword(event.target.value);
        console.log(event.target.value);
    }
    async function register() {

        try {
            setErrorMsg(' ');
            const createdUser = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    
            setRegisterEmail("");
            setRegisterPassword("");
        } catch(err) {
            switch (err.code) {
                case 'auth/weak-password':
                    setErrorMsg("비밀번호는 6자리 이상이어야 합니다.");
                    break;
                case 'auth/invalid-email':
                    setErrorMsg("잘못된 이메일 주소입니다.");
                    break;
                case 'auth/email-already-in-use':
                    setErrorMsg("이미 가입되어 있는 계정이다.");
                    break;
            }
        }
    }

    return(
        <ImageBackground image='/resources/camera.jpg'>
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
                 No account? <a href="">Sign up</a>
                </p>
            </div>
        </ImageBackground>
    );
}

export default function App() {
    return(
        <div>
            <LoginForm/>
        </div>
    );
}