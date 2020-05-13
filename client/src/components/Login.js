import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Login.scss";

export default function Login(props) {

  const [users, setUsers] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {

    axios.get('/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log('Users: ', users)



  function findUser(users, email) {

    // console.log('Users', users, 'Email', email)

    for (let user of users) {
      if (email === user.email && password === user.password) {

        console.log(user.name);
        return;
      } else {

        console.log("Email or password is invalid")
      }
    }
  }

  return (
    <div>
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

          <button onClick={() => findUser(users, email)}>Login</button>

        </div>
      </form>
    </div>
  )
}