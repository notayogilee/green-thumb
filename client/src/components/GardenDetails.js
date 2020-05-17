import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PlantCardList from './PlantCardList';
import Button from './Button';
import AllPlants from './AllPlants';

export default function GardenDetails(props) {

  const [plants, setPlants] = useState([])
  const [addPlant, setAddPlant] = useState(false)

  console.log('props', props)

  const findGarden = (gardenId) => {
    axios.get(`/gardens/${gardenId}/plants`)
      .then(({ data: plants }) => {
        setPlants(plants);
      })
  }

  const plantCard = plants.map(plant =>
    <PlantCardList
      key={plant.id}
      id={plant.id}
      img={plant.image_url}
      name={plant.name}
      wateringTime={plant.watering_time}
      gardenId={props.id}
    />
  );


  console.log(plants)
  return (
    <div>
      <button onClick={() => findGarden(props.id)}>{props.title}</button>
      <button onClick={() => setAddPlant(!addPlant)}>Add Plant</button>
      {!addPlant &&
        <ul>{plantCard}</ul>
      }
      {addPlant &&
        <AllPlants
          loggedInUser={props.loggedInUser}
          plants={props.plants}
          gardenId={props.id}
        />
      }
    </div>
  )
}