import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {

  const [{ user }, dispatch] = useStateValue();

  // Run once every time app loads, and everything basket is modififed
  useEffect( () => {
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){ // user successfully logged in
        
        // Push user into data layer
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        // user logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    // preform cleanup
    return () => {
      unsubscribe(); // stop login event listener
    }
  }, []);

  console.log('User info: ', user);

  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path="/checkout">
        <Header />
        <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
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
