import React from "react";

import '../CSS/login-form.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: props.placeholder,
        }
    }

    render() {
        return(
            <div className="login_card">
                <p className="login_title">Login Form</p>
                <input className="login_input" type="text" placeholder="username" />
                <input className="login_input" type="password" placeholder="password" />
                <p className="login_comment">if you don't have any account, sign up!</p>
            </div>
        );
    }
}

export default function App() {
    return(
        <div>
            <LoginForm placeholder='username'/>
        </div>
    );
}