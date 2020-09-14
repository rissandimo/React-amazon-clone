import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { auth } from './firebase';

import './Login.css';

function Login(){

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => { 
            // push 'root' into history so if use hits back button -> they re-directed to login/home page
            history.push('/');
        })
        .catch(e => alert(e.message));
    };

    const register = event => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/');
        })
        .catch( event => alert(event.message));
    };


    return(
        <div className="login">
          <Link to="/">
              <img
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/1200px-Amazon.com-Logo.svg.png"
               />
          </Link>

          <div className="login__container">
              <h1>Sign In</h1>
              <form>
                  <h5>Email</h5>
                  <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                  <h5>Password</h5>
                  <input type="password" onChange={event => setPassword(event.target.value)} value={password}/>
                  <button type="submit" className="login_signInButton" onClick={login}>Sign In</button>
              </form>

              <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice.</p>
              <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
          </div>
        </div>
    );
}

export default Login;