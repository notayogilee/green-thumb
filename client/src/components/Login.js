import React, { useState } from 'react';
import useGardenData from '../hooks/useGardenData';
import "./Login.scss";
import { Redirect } from 'react-router-dom';

export default function Login(props) {

  const { state } = useGardenData();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState(null);

  function findUser(users, email) {

    for (let user of users) {
      if (email === user.email && password === user.password) {

        setUserId(user.id);
        return;
      } else {
        console.log('error');
      }
    }
  }

  if (userId) {
    return <Redirect userId={userId} to={`/gardens/${userId}/plants`} />
  }

  return (
    <div>
      <center> <h1> Login </h1> </center>
      <form className="form"
        onSubmit={event => {
          event.preventDefault();

        }
        }>
        <div className="container login-form">
          <label>Email : </label>
          <input
            type="text"
            value={email}
            placeholder="Enter Email"
            onChange={event => {
              setEmail(event.target.value);
            }}
            name="email" required></input>
          <label>Password : </label>
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={event => {
              setPassword(event.target.value);
            }}
            name="password" required></input>

          <button onClick={() => {

            findUser(state.users, email);

          }} >Login</button>

        </div>
      </form>
    </div>
  )
}