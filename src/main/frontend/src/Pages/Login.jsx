import React, { useState } from "react";
import { ImageBox } from "./Component/BoxForm";
import { LoginForm } from "./Component/LoginForm";

import '../CSS/LoginPage/login-form.css';


export default function App() {
    return(
        <div>
            <LoginForm isLogin={true} />
        </div>
    );
}