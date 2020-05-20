import React, { useState, useEffect } from 'react';
import GardenDetails from './GardenDetails';
import GardenAdd from './GardenAdd';
import M from 'materialize-css'
import 'materialize-css'


export default function Garden(props) {


  // useEffect(() => {
  //     var elems = document.querySelectorAll('.dropdown-trigger');
  //     M.Dropdown.init(elems, {
  //       hover: true
  //     });
  //     var elems = document.querySelectorAll('.modal');
  //     M.Modal.init(elems, {
        
  //     });
  //   },[]);
  
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
      handleSuccessfulAuth={props.handleSuccessfulAuth}
    />
  )
  // addNewGarden={addNewGarden}
  // updateGarden={updateGarden}
  // deleteGarden={deleteGarden}

  return (
    <>
     {/* <!-- Modal Trigger --> */}
  <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

  {/* <!-- Modal Structure --> */}
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text from Garden main</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
  {/* <!-- Dropdown Trigger --> */}
  <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

  {/* <!-- Dropdown Structure --> */}
  <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul>
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