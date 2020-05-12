import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';


function Navbar(props) {

  return (

    <nav>
      <ul>
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
      </ul>
    </nav>

  );

}

export default Navbar;