import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

export default function Sidebar(props) {

  var elem = document.querySelector(".sidenav");
  var instance = M.Sidenav.init(elem, {
    edge: "left",
    inDuration: 250
  });


  return (
    <div>
      <ul id="slide-out" className="sidenav">
        <li />
        <li>
          <a href="/">
            <i class="green-text darken-4 lni-32 lni lni-sprout"></i>Green Thumb
                        </a>
        </li>
        <li>
          <a href="#!">Second Link</a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="subheader">Subheader</a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            Third Link With Waves
                        </a>
        </li>
      </ul>
      <a href="#" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
    </div>
  );
}

// PlantList ITem code



