import React from 'react';
import GardenDetails from './GardenDetails';


export default function Garden(props) {

  const gardens = props.gardens;

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
    />
  )


  return (
    <ul>
      {mapUserGardens}
    </ul>
  )
}