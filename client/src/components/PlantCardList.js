import React from 'react';
import useGardenData from '../hooks/useGardenData';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import axios from 'axios';
import Timer from './Timer';

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
    console.log(' axios: ', props)
    axios.post(`/gardens/${targetGardenId}/plants/${targetPlantId}`, { watering_time: null })
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


      <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel hoverable grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              <img src={props.img} alt="" class="circle responsive-img" />
            </div>
            <div class="col s10">
              <h4>{props.name}</h4>
              <span class="black-text">
                {props.description}
              </span>
              <br />
              <Button name="More Info" onclick={() => handleShow(props.id)}></Button>
              {
                props.loggedInUser && props.loggedInUser.logged_in && props.wateringTime === undefined &&
                <>
                  <Button name="Add Plant" onclick={() => addPlant(props.gardenId, props.id)}></Button>

                </>
              }
              {
                props.wateringTime !== undefined &&

                <>
                  <Button name="Remove Plant" onclick={() => removePlant(props.gardenId, props.id)}></Button>
                  <Timer
                    wateringTime={props.wateringTime}
                  />
                </>
              }
            </div>
          </div>
        </div>
      </div>





    </form>


  )

}