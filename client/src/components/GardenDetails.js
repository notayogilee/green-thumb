import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PlantCardList from './PlantCardList';
import Button from './Button';
import AllPlants from './AllPlants';
import GardenUpdate from './GardenUpdate';
import GardenDelete from './GardenDelete';

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
      {/* <button onClick={() => addGarden()}>Add a New Garden [+]</button> */}
      <button onClick={() => findGarden(props.id)}>{props.title}</button>
      Location: {props.location}
      <GardenUpdate 
        loggedInUser={props.loggedInUser} 
        id={props.id}
        title={props.title}
        location={props.location}
        updateGarden={props.updateGarden}
        
        />
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
      <GardenDelete
        loggedInUser={props.loggedInUser} 
        id={props.id}
        deleteGarden={props.deleteGarden}
       />
       <br />
       <br />
       <br />
    </div>
  )
}