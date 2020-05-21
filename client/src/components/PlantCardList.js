import React from 'react';
import useGardenData from '../hooks/useGardenData';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import axios from 'axios';
import Timer from './Timer';
import './PlantCardList.css';

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


  function addPlant(targetGardenId, targetPlantId) {

    axios.post(`/gardens/${targetGardenId}/plants/${targetPlantId}`, { watering_time: 1 })
      .then(res => console.log('addPlant', res))
      .catch(err => console.log(err))
  }

  function removePlant(targetGardenId, targetPlantId) {
    axios.delete(`/gardens/${targetGardenId}/plants/${targetPlantId}`)
      .then(res => console.log('deletePlant', res))
      .catch(err => console.log(err))
  }

  const handleShow = (plantId) => {
    let plantObject = getPlantData(state.plants, plantId)
    history.push('/plant', plantObject);
    window.scrollTo(0, 0);
  }

  return (

    <div className="row">
      <div className="col s12 m12">
        <div className="card">
          <div className="card-image image">
            <img src={props.img} />
            <span className="secondary-color card-title">{props.name}</span>
            <a onClick={() => handleShow(props.id)} className="btn-floating halfway-fab green lighten-2 secondary-color"><i className="secondary-color lni lni-question-circle"></i></a>
          </div>
        </div>
      </div>
    </div>

  )
}