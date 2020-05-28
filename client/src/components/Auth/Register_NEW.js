import React, { useState } from 'react';
import axios from 'axios';
import Button from '../Button';

// Warning: Changing formats may affect server-side response.

export default function Register(props) {


  // "registrationErrors" is clint-side only //
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    registrationErrors: ""
  });

  const handleChange = function (event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = function (event) {
    event.preventDefault();

    axios
      .post('http://localhost:3000/registrations', // <-- this is full path, would it work without "http://localhost:3000"?
        {
          user: {
            name: user.name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation
          }
        },
        { withCredentials: true } // <-- VERY-IMPORTANT: Tells rails-API to set this cookie in client/browser. Without it no permission. Won't give errors!.
      )
      .then(res => {
        if (res.data.status === "created") {
          props.handleSuccessfulAuth(res.data)
        }
      })
      .catch(err => {
        console.log("registration Error", err)
      })

  };


  return (
    <div>
      <center> <h1 className="green-text lighten-2"> Register </h1> </center>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container login-form">

          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="Enter your name or username"
            onChange={handleChange}
            required
          />

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
            placeholder="Enter a Password"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password_confirmation"
            value={user.password_confirmation}
            placeholder="Password Confirmation"
            onChange={handleChange}
            required
          />

          <Button name="Register" type="submit"> Register </Button>

        </div>
      </form>
    </div>
  )
}