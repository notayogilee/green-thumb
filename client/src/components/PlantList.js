import React from 'react';
import PlantListItem from './PlantListItem';
import useGardenData from '../hooks/useGardenData';

export default function PlantList(props) {

  const { state } = useGardenData();

  const plantArray = state.plants.map(plant =>
    <PlantListItem
      key={plant.id}
      id={plant.id}
      name={plant.name}
      description={plant.description}
      feeding={plant.feeding}
      diseases={plant.description}
      growing_from_seed={plant.growing_from_seed}
      harvesting={plant.harvesting}
      img={plant.image_url}
      optimal_soil={plant.optimal_soil}
      other_care={plant.other_care}
      pests={plant.pests}
      planting_considerations={plant.planting_considerations}
      spacing={plant.spacing}
      storage={plant.storage_use}
      transplanting={plant.transplanting}
      watering={plant.watering}
      when_to_plant={plant.when_to_plant}
      watering_time={plant.watering_time}
    />
  );

  return (

    plantArray

  )
}