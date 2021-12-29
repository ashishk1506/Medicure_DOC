import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhg5eWDBz3wJp_E4jtZvnFkgP5xjduxbQ",
  authDomain: "medicure-devlopment.firebaseapp.com",
  projectId: "medicure-devlopment",
  storageBucket: "medicure-devlopment.appspot.com",
  messagingSenderId: "726013609147",
  appId: "1:726013609147:web:911f876f89b2a99213559e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// const provider = new GoogleAuthProvider();
// export const signInWithGoogle = () =>{
// signInWithPopup(auth, provider)
//   .then((result) => {
//     console.log(result)
//   }).catch((error) => {
//     console.log(error)
//   });
// }
