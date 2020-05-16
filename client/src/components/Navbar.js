import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import useLoggedInState from '../hooks/useLoggedInState';


function Navbar(props) {
  const { loggedInState, handleLogoutClick } = useLoggedInState()

  return (
    <nav>

      <ul>
        <li> {loggedInState.loggedInStatus} </li>
        <li>
          <Link to="/">
            <Button name="Home" />
          </Link>
        </li>
        <li>
          <Link to="/register">
            <Button name="Register" />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <Button name="Login" />
          </Link>
        </li>
        <li>
            <Button name="logout" onclick={() => handleLogoutClick()}/>
        </li>
      </ul>
    </nav>

  );

}

export default Navbar;