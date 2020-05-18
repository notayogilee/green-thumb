import React from 'react';
import useGardenData from '../hooks/useGardenData';
import PlantCardList from './PlantCardList';

export default function PlantCard(props) {

  const { state } = useGardenData();

  const plantCard = state.plants.map(plant =>

    <PlantCardList
      {...props}
      key={plant.id}
      id={plant.id}
      img={plant.image_url}
      name={plant.name}
      description={plant.description}
      loggedInUser={props.loggedInUser}
      gardenId={props.gardenId}
    />
  );

  return (

    plantCard

  )
}



