import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import Button from './Button';
import './SideBar.css';

export default function Sidebar(props) {

  var elem = document.querySelector(".sidenav");
  var instance = M.Sidenav.init(elem, {
    edge: "left",
    inDuration: 250
  });


  return (
    <div className="green lighten-2 position">
      <h2 class="secondary-color position"><i className="secondary-color lni-32 lni lni-sprout"></i>Green Thumb</h2>

      <ul id="slide-out" className="sidenav green lighten-2">
        <li>
          <a href="/">
            <i className="secondary-color lni-32 lni lni-sprout"></i><h4 class="secondary-color">Green Thumb</h4>
          </a>
        </li>

        <Link className="sidenav-close" to="/">
          <Button className="sidenav-close transparent" name="Home" />
        </Link>

        {!props.loggedInUser.logged_in &&
          <>
            <li>
              <Link className="sidenav-close" to="/register">
                <Button className="sidenav-close transparent" name="Register" />
              </Link>
            </li>
            <li>
              <Link className="sidenav-close" to="/login">
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
  );
}

{/* <ul id="slide-out" classNameName="sidenav">
        <li />
        <li>
          <a href="/">
            <i class="green-text darken-4 lni-32 lni lni-sprout"></i>Green Thumb
                        </a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
        </li>

        <li>
          <a className="waves-effect" href="/login">
            Login
                        </a>
        </li>
      </ul> */}
{/* <a href="#" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a> */}




