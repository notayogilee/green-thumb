import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import useLoggedInState from '../hooks/useLoggedInState';


function Navbar(props) {
  //   const { loggedInState, handleLogoutClick } = useLoggedInState()
  // console.log('nav', props, 'nav state', state)
  // need to make sure user exists or not
  // hard coded user for now
  // const user = 3;



  return (

    <nav>
      <div class="nav-wrapper teal darken-4">
      <i class="green-text darken-4 lni-32 lni lni-sprout"></i>
        <a href="/" class="brand-logo">  Green Thumb</a>
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


  {/* <nav>
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
        <li>
          <Link to="/gardens">
            <Button name="gardens" />
          </Link>
        </li>
        <li>
          <Button name="logout" onclick={() => props.handleLogoutClick()} />
        </li>
      </ul>
    </nav> */}

}

export default Navbar;