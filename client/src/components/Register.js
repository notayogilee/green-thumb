import React, { useState } from 'react';
import axios from 'axios';


export default function Register(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div>
      <center> <h1> Register </h1> </center>
      <form className="form" onSubmit={event => event.preventDefault()}>
        <div className="container login-form">
          <label>Name : </label>
          <input
            type="text"
            value={name}
            placeholder="Enter Email"
            onChange={event => {
              setName(event.target.value);
            }}
            name="username" required>
          </input>
          <label>Email : </label>
          <input
            type="text"
            value={email}
            placeholder="Enter Email"
            onChange={event => {
              setEmail(event.target.value);
            }}
            name="username" required>
          </input>
          <label>Password : </label>
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={event => {
              setPassword(event.target.value);
            }}
            name="password" required>
          </input>
          <label>Confirm Password : </label>
          <input
            type="text"
            value={confirmPassword}
            placeholder="Enter Email"
            onChange={event => {
              setConfirmPassword(event.target.value);
            }}
            name="username" required></input>

          <button onClick={() =>
            console.log('name: ', name, 'email: ', email, 'password: ', password)}>Register</button>

        </div>
      </form>
    </div>
  )
}