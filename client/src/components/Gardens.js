import React, { useState } from 'react';
import GardenDetails from './GardenDetails';
import GardenAdd from './GardenAdd';

import "materialize-css/dist/css/materialize.css";
import M from "materialize-css/dist/js/materialize.js";


export default function Garden(props) {

  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: true,
      toolbarEnabled: false
      
    });
    // instances.open();
    // var instance = M.FloatingActionButton.getInstance(elem);
    // instance.open();
  });

  // this garden is passed as a prop from the state of useGarden in apps.
  let gardens = props.gardens;
  // const tempGardens = props.gardens;
  
  // const [gardens, setGardens] = useState(props.gardens)
  // console.log("props.gardens", props.gardens)
  // console.log("props.gardens", props.gardens)

  function findUserGarden(id, gardens) {

    return gardens.filter(garden => garden.user_id === id);

  }
  
  const userGarden = (findUserGarden(props.loggedInUser.user.id, gardens));

  const mapUserGardens = userGarden.map(garden =>

    <GardenDetails
      key={garden.id}
      id={garden.id}
      title={garden.title}
      location={garden.location}
      loggedInUser={props.loggedInUser}
      plants={props.plants}
      updateGarden={props.updateGarden}
      deleteGarden={props.deleteGarden}
    />
  )
  // addNewGarden={addNewGarden}
  // updateGarden={updateGarden}
  // deleteGarden={deleteGarden}

  return (
    <>
    
    <div className="fixed-action-btn">
          <a className="btn-floating btn-large red">
            <i className="large material-icons">mode_edit</i>
          </a>
          <ul>
            <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
            <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
            <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
            <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
          </ul>
        </div>
    <GardenAdd 
      loggedInUser={props.loggedInUser} 
      addNewGarden={props.addNewGarden}
    />
    <div className="row"> 
      
    {/* <div  className="col s24 m3 l3">  */}
    <div> 
      <ul>
        {mapUserGardens}
      </ul>
    </div>
    </div>
    </>
  )
}