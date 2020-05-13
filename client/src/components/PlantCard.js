import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';
import PlantCardList from './PlantCardList';


export default function PlantCard(props) {
  // console.log('state', state)

  const [plants, setPlants] = useState([])

  useEffect(() => {

    axios.get('/plants')
      .then(res => setPlants(res.data))
      .catch(err => console.log(err))
  }, [])

  const plantCard = plants.map(plant =>

    <PlantCardList
      key={plant.id}
      img={plant.image_url}
      name={plant.name}
    />
  );


  return (
    <ul>{plantCard}</ul>
  )
}


