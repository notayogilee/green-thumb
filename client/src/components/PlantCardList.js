import React from 'react';
import useGardenData from '../hooks/useGardenData';
import { useHistory } from 'react-router-dom';

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

    <div>

      <form className="form"
        onSubmit={event => {
          event.preventDefault();
        }
        }>

        <h3>{props.name}</h3>

        <button onClick={() => handleShow(props.id)}>MoreInfo</button>

        <img src={props.img} alt="img"></img>

      </form>

    </div>
  )

}