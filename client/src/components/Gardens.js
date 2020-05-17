import React from 'react';
import GardenDetails from './GardenDetails';


export default function Garden(props) {

  console.log('gardens', props)
  console.log('loged in user', props.loggedInUser.user)
  const gardens = props.gardens;


  function findUserGarden(id, gardens) {

    return gardens.filter(garden => garden.user_id === id);

  }

  // if (props.loggedInUser.user) {
  const userGarden = (findUserGarden(props.loggedInUser.user.id, gardens));

  const mapUserGardens = userGarden.map(garden =>

    <GardenDetails
      key={garden.id}
      id={garden.id}
      title={garden.title}
      location={garden.location}
    />
  )
  // }

  return (
    <ul>
      {mapUserGardens}
    </ul>
  )
}