import React from "react";
import "./GoogleLoginButton.css"

export const GoogleLoginButton = ({login}) =>{
  return (
      <button type="button" className="login-with-google-btn" onClick={login}>
        Sign in with Google
      </button>
  );
}
