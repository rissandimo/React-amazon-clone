import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

// Stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

function App() {

  const promise = loadStripe('pk_test_51HTuCLGlap3A7zAIyQX1bSHtbMDjIE7DuGETSigZyL4WlBsL8pRBFwqXd6yDmoPaiQNf9ftJPoRxEy6JQTxxTDSe00Kw0mqb8d');



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
        <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
