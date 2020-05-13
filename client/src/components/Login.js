import React, { useState } from 'react';
import "./Login.scss";

export default function Login(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(null)

  return (
    <body>
      <center> <h1> Login </h1> </center>
      <form className="form" onSubmit={event => event.preventDefault()}>
        <div className="container login-form">
          <label>Email : </label>
          <input
            type="text"
            value={email}
            placeholder="Enter Email"
            onChange={event => {
              setEmail(event.target.value);
            }}
            name="username" required></input>
          <label>Password : </label>
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={event => {
              setPassword(event.target.value);
            }}
            name="password" required></input>

          <button onClick={() => console.log(email, password)}>Login</button>

        </div>
      </form>
    </body>
  )
}