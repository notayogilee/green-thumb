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

    <form className="form"
      onSubmit={event => {
        event.preventDefault();
      }
      }>

      <div className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-image image">
              <img src={props.img} />
              <span className="secondary-color card-title">{props.name}</span>


              <a onClick={() => handleShow(props.id)} className="btn-floating halfway-fab btn-large green lighten-2 secondary-color"><i className="secondary-color lni-32 lni lni-question-circle"></i></a>
              {props.loggedInUser && props.loggedInUser.logged_in && props.wateringTime === undefined &&

                <>
                  <a onClick={() => handleShow(props.id)} className="btn-floating halfway-fab btn-large green lighten-2 secondary-color"><i className="secondary-color lni-32 lni lni-question-circle"></i></a>
                  <a onClick={() => addPlant(props.gardenId, props.id)} class="left btn-floating halfway-fab btn-large waves-effect waves-light green darken-4"><i class="large material-icons">add</i></a>
                </>
              }
              {
                props.wateringTime !== undefined &&
                <>
                  <a onClick={() => handleShow(props.id)} className="btn-floating halfway-fab btn-large green lighten-2 secondary-color"><i className="secondary-color lni-32 lni lni-question-circle"></i></a>
                  <a onClick={() => removePlant(props.gardenId, props.id)} className="left btn-floating btn-large halfway-fab red "><i class="large material-icons">clear</i></a>
                </>
              }


            </div>
          </div>
        </div>
      </div>


    </form>

  )
}