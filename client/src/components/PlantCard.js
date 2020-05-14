import React from 'react';
import useGardenData from '../hooks/useGardenData';
import PlantCardList from './PlantCardList';


export default function PlantCard(props) {

  const { state } = useGardenData();

  const plantCard = state.plants.map(plant =>

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



