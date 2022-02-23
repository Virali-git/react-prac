import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
//react boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{}, dispatch] = useStateValue();

  //useeffect -listner---> "like if statement"

  useEffect(() => { 
    // will only runs once when the app component loads

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      console.log("THE USER IS>>>>>>>>>>>>>>>>", user);
      if (user) {
        //*************User just logged in or user was logged in ****************
        dispatch({
          type: "SET_USER", //every time they login - **shoot the user into the data layer**
          user: user,
        });
       
      } else {
        //***************/ User is logged out *********************
        dispatch({
          type: "SET_USER",
          user: null,
        }); // remove the user from data layer
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
     
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>
          {/*default root should be at the bottom*/}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
