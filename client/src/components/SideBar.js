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
      <div className="menu">
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i class=" fas fa-bars fa-2x"></i></a>
      </div>

      <h2 className="secondary-color position"><i className="secondary-color lni-32 lni lni-sprout"></i>Green Thumb</h2>


      <ul id="slide-out" className="sidenav green lighten-2">
        <h5 className="position secondary-color"><i className="secondary-color lni-flip-32 lni lni-sprout"></i>Green Thumb</h5>

        <li>
          <Link className="sidenav-close" to="/">
            <Button className="secondary-color sidenav-close transparent" name="Home" />
          </Link>
        </li>

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





