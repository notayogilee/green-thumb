import React from 'react';
import useGardenData from '../hooks/useGardenData';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import axios from 'axios';
import Timer from './Timer';

export default function PlantCardList(props) {

  const { state } = useGardenData();

  console.log('WT', props)

  const history = useHistory();

  function getPlantData(allPlants, plantId) {
    const selectedPlant = allPlants.filter(plant =>
      plant.id === plantId
    );
    const plant = selectedPlant[0];
    return plant;
  }
  // useEffect(() => {
  //   axios.get('http://api.openweathermap.org/data/2.5/weather?q=montreal&appid=a2662e448644542c9ee3b85b621ce010')
  // })
  //   .then(res => console.log((res.data)))
  //   .catch((err) => console.log(err))

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
  }

  return (

    // <div>

    <form className="form"
      onSubmit={event => {
        event.preventDefault();
      }
      }>
      <div class="col s5">
        <h3>{props.name}</h3>
        <div class="col s1"><img src={props.img} alt="img"></img></div>
        <Button name="More Info" onclick={() => handleShow(props.id)}></Button>

        {props.loggedInUser && props.loggedInUser.logged_in && props.wateringTime === undefined &&
          <>
            <Button name="Add Plant" onclick={() => addPlant(props.gardenId, props.id)}></Button>

          </>
        }
        {props.wateringTime !== undefined &&

          <>
            <Button name="Remove Plant" onclick={() => removePlant(props.gardenId, props.id)}></Button>
            <Timer
              wateringTime={props.wateringTime}
            />
          </>
        }
      </div>


      {/* <h3>{props.name}</h3>

        <Button name="More Info" onclick={() => handleShow(props.id)}></Button>

        <img src={props.img} alt="img"></img> */}

    </form>

    // </div>
  )

}