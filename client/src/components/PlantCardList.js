import React from 'react';
import useGardenData from '../hooks/useGardenData';
import { useHistory } from 'react-router-dom';
import Button from './Button';

export default function PlantCardList(props) {

  const { state } = useGardenData();

  const history = useHistory();

  function getPlantData(allPlants, plantId) {
    const selectedPlant = allPlants.filter(plant =>
      plant.id === plantId
    );
    const plant = selectedPlant[0];
    return plant;
  }

  const handleShow = (plantId) => {
    let plantObject = getPlantData(state.plants, plantId)
    history.push('/plant', plantObject);
  }

  return (

    // <div>

    <form className="form"
      onSubmit={event => {
        event.preventDefault();
      }
      }>
      <div class="row">
        <h3>{props.name}</h3>
        <div class="col s1"><img src={props.img} alt="img"></img></div>
        <Button name="More Info" onclick={() => handleShow(props.id)}></Button>
      </div>


      {/* <h3>{props.name}</h3>

        <Button name="More Info" onclick={() => handleShow(props.id)}></Button>

        <img src={props.img} alt="img"></img> */}

    </form>

    // </div>
  )

}