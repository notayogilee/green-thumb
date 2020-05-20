import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function Navbar(props) {

  return (

    <nav>
      <div class="nav-wrapper">
        <i class="green-text darken-4 lni-32 lni lni-sprout"></i>
        <a href="/" class="brand-logo">Green Thumb</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to="/">
              <Button name="Home" />
            </Link>
          </li>
          {!props.loggedInUser.logged_in &&
            <>
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
            </>
          }
          {props.loggedInUser.logged_in &&
            <>
              <li>
                <Link to="/gardens">
                  <Button name="gardens" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Button name="logout" onclick={() => props.handleLogoutClick()} />
                </Link>
              </li>
            </>
          }
        </ul>
      </div>
    </nav>
  );

}

export default Navbar;