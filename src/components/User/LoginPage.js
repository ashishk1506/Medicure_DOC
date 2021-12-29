import React, { useState } from "react";
import { auth } from "../../firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// import './loginFunctions'
import "./LoginPage.css";

export const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const registerUser = () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(`registered ${user}`);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`ResiterError ${error}`);
        // ..
      });
  };

  const signInUser = () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(`sign in ${user}`);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`SignInerror ${error}`);
      });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("sign out success");
      })
      .catch((error) => {
        // An error happened.
        console.log("sign out fail");
      });
  };

  return (
    <div>
      <h1> regsiter</h1>
      <input
        onChange={(e) => {
          setRegisterEmail(e.target.value);
        }}
      />
      <input
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
      />
      <button onClick={registerUser}>Register</button>
      <h1> Login</h1>
      <input
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
      />
      <input
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
      />
      <button onClick={signInUser}>Login</button>
      <h1> signOut</h1>
      <button onClick={signOutUser}>signOut</button>
    </div>
  );
};
