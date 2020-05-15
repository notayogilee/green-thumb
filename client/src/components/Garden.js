import React from 'react';
import userGardenData from '../hooks/useGardenData';
import GardenDetails from './GardenDetails';


export default function Garden(props) {

  const { state } = userGardenData();

  const gardens = state.gardens;

  // const gardens = [
  //   {
  //     id: 1,
  //     title: "The House Garden",
  //     location: "Montreal",
  //     user_id: 1
  //   },
  //   {
  //     id: 2,
  //     title: "BackyardGarden",
  //     location: "Montreal",
  //     user_id: 2
  //   },
  //   {
  //     id: 3,
  //     title: "LaFontaine",
  //     location: "Montreal",
  //     user_id: 3
  //   }
  // ];

  // const users = [
  //   {
  //     id: 1,
  //     name: "Andy",
  //     email: "andy@labber.ca",
  //     password: "labber"
  //   },
  //   {
  //     id: 2,
  //     name: "Sheldon",
  //     email: "sheldon@labber.ca",
  //     password: "labber"
  //   },
  //   {
  //     id: 3,
  //     name: "Felix",
  //     email: "felix@labber.ca",
  //     password: "labber"
  //   }
  // ];



  function findUserGarden(id, gardens) {

    return gardens.filter(garden => garden.user_id === id);

  }

  const userGarden = (findUserGarden(3, gardens));

  const mapUserGardens = userGarden.map(garden =>

    <GardenDetails
      key={garden.id}
      id={garden.id}
      title={garden.title}
      location={garden.location}
    />
  )

  return (
    <ul>
      {mapUserGardens}
    </ul>
  )
}