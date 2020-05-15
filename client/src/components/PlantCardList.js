import React, { useState } from 'react';
import PlantListItem from './PlantListItem';
import useGardenData from '../hooks/useGardenData';


export default function PlantCardList(props) {

  const { state } = useGardenData();
  const [plantInfo, setPlantInfo] = useState(null);

  function getPlantDetails(allPlants, plantId) {
    const selectedPlant = allPlants.filter(plant =>
      plant.id === plantId
    );
    const plant = selectedPlant[0];
    return (

      setPlantInfo(<PlantListItem
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
      />)
    )
  }

  return (

    <div>
      {plantInfo &&
        plantInfo
      }

      {plantInfo === null &&
        <form className="form"
          onSubmit={event => {
            event.preventDefault();

          }
          }>

          <h3>{props.name}</h3>

          <button onClick={() => {
            getPlantDetails(state.plants, props.id);


          }} >More Info</button>

          <img src={props.img} alt="img"></img>

        </form>
      }

    </div>
  )
}