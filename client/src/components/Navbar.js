import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';


function Navbar(props) {

  // need to make sure user exists or not
  // hard coded user for now
  const user = 1;

  return (
    <nav>
      <ul>
        <Link to="/">
          <Button name="Home" />
        </Link>
        {user === null &&
          <>
            <Link to="/register">
              <Button name="Register" />
            </Link>

            <Link to="/login">
              <Button name="Login" />
            </Link>
          </>
        }

        {user &&
          <Button name="Logout" />
        }
      </ul>
    </nav>
  );

}

export default Navbar;