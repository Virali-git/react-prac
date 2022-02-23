import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebasev";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() { 
  const history = useHistory(); // programatically change URL

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const auth = getAuth();

  //Sign In--- Part 1
  const signIn = (e) => {
    e.preventDefault(); //prevent page from refreshing--imp

    //Some Fancy firebase login things
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          history.push("/"); //registered and redirects to the home page
        }
      })
      .catch((error) => alert(error.message));
  };

  //Register--- Part 2
  const register = async (e) => {
    e.preventDefault();
    //fancy firebase stuff happens here.............
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //after then-- means it successfully created 
        console.log(userCredential);
        const user = userCredential.user;
        // ...
        if (userCredential) {
          history.push("/"); //registered and redirects to the home page
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="header__logo" src="/images/wineitup.png" />
      </Link>
      <div className="login__wrapper">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login-signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to wine it up Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and Our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login-registerButton">
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
