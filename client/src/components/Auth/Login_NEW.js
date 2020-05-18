import React, { useState } from 'react';
import axios from 'axios';
import Button from '../Button';
import { Link, Redirect } from 'react-router-dom';

import "./Login.scss";

// import useLoggedInState from '../../hooks/useLoggedInState';



// Warning: Changing formats may affect server-side response.


export default function Login(props) {


  // const { loggedInState, handleSuccessfulAuth, checkLoginStatus } = useLoggedInState()


  // "loginErrors" is clint-side only //
  const [user, setUser] = useState({
    email: "",
    password: "",
    loginErrors: ""
  });

  console.log('LoginNew', props)

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = function (event) {
    event.preventDefault();

    console.log("Login-session form submitted");
    // console.log("loggedInState (BEFORE) : ", loggedInState)
    axios
      .post('http://localhost:3000/sessions', // <-- this is full path, would it work without "http://localhost:3000"?
        {
          user: {
            email: user.email,
            password: user.password
          }
        },
        { withCredentials: true } // <-- VERY-IMPORTANT: Tells rails-API to set this cookie in client/browser. Without it no permission. Won't give errors!.
      )
      .then(res => {
        console.log("Login Response", res.data)
        if (res.data.status === "created") {
          props.handleSuccessfulAuth(res.data)
        }


      })
      .catch(err => {
        console.log("Login Error", err)
      })

    // console.log("loggedInState (AFTER) : ", loggedInState)
  };

  return (
    <div>
      <center> <h1> Login </h1> </center>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container login-form">

          <input
            type="email"
            name="email"
            value={user.email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter your Password"
            onChange={handleChange}
            required
          />

          <Button name="Login" type="submit" onSubmit={handleSubmit}></Button>

        </div>
      </form>
    </div>
  )
}