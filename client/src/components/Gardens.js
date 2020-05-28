import React from 'react';
import GardenDetails from './GardenDetails';
import GardenAdd from './GardenAdd';
import 'materialize-css';


export default function Garden(props) {

  let gardens = props.gardens;

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

  return (
    <>

      <GardenAdd
        loggedInUser={props.loggedInUser}
        addNewGarden={props.addNewGarden}
      />
      <div className="row">
        <div>
          <ul>
            {mapUserGardens}
          </ul>
        </div>
      </div>
    </>
  )
}