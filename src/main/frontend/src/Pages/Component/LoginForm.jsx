import React, { useState } from "react";
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
            (a) => {}
        );
    } catch(error) {
        return error.message.replace("Firebase: Error ", "");
    }
}

export async function loginWithEmail(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("it work!");
    } catch (error) {
        console.log("it wasn't work!");
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
  