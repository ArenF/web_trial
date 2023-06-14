import React, { useState } from "react";
import { ImageBox } from "./BoxForm";
import {auth} from '../../firebase';
import {
    createUserWithEmailAndPassword,
    getRedirectResult,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithRedirect,
    signOut,
} from 'firebase/auth';


// 이메일로 가입하는 함수
export async function registerEmail(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password).then(
            () => {
              alert("your account successfully regist!");
              toLogin();
            }
        );
    } catch(error) {
        return error.message.replace("Firebase: Error ", "");
    }
}

// 로그인이 성공한다면 board페이지로
function toBoard() {
  window.location.href = '/board';
}

function toLogin() {
  window.location.href = '/login';
}

//이메일로 로그인하는 함수
export async function loginWithEmail(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toBoard();
    } catch (error) {
      alert("Login Failed!");
      return error.message.replace("Firebase: Error ", "");
    }
}

//Google, Github로 로그인하는 함수
export async function loginWithSocial(provider) {
    if (provider === "google") {
      try {
        const provider = new GoogleAuthProvider();
        await new signInWithRedirect(auth, provider);
        const result = await getRedirectResult(auth);
        if (result) {
          // const user = result.user;
        }
        return;
      } catch (error) {
        return error;
      }
    } else if (provider === "github") {
      try {
        const provider = new GithubAuthProvider();
  
        await new signInWithRedirect(auth, provider);
        const result = await getRedirectResult(auth);
        if (result) {
          // const user = result.user;
        }
        return;
      } catch (error) {
        return error;
      }
    }
}

function signLink(ifLogin) {
  const signup = (
    <p className="signup-link">
      No account? <a href="/signup">Sign up!</a>
    </p>
  );

  const login = (
    <p className="login-link">
      Have account? <a href="/login">Sign in!</a>
    </p>
  );

  if (ifLogin) {
    return signup;
  } else {
    return login;
  }
}

export function LoginForm({ isLogin }) {

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

    function login() {
      if (isLogin) {
        loginWithEmail(email, password);
      } else {
        registerEmail(email, password);
      }
    }

    return (
        <ImageBox image='/resources/camera.jpg' width='100vw' height='100vh'>
            <div className="form">
                <p className="form-title">{isLogin ? "Login to your account!" : "Sign up your account!"}</p>
                <div className="input-container">
                   <input onChange={saveEmail} type="email" placeholder="Enter Email"/>
                   <span>
                   </span>
                </div>
                <div className="input-container">
                   <input onChange={savePassword} type="password" placeholder="Enter Password"/>
                </div>
                <button onClick={login} class="submit">
                    {isLogin ? "LOGIN!" : "SIGN UP!"}
                </button>

                {signLink(isLogin)}
            </div>
        </ImageBox>
    );
}