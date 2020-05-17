import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PlantCardList from './PlantCardList';
import Button from './Button';


export default function GardenDetails(props) {

  const [plants, setPlants] = useState([])

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
    />
  );

  return (
    <div>
      <Button name={props.title} onclick={() => findGarden(props.id)}></Button>

      <ul>{plantCard}</ul>
    </div>
  )
}