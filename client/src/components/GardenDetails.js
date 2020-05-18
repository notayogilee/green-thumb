import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PlantCardList from './PlantCardList';
import Button from './Button';
import AllPlants from './AllPlants';
import GardenUpdate from './GardenUpdate';
import GardenDelete from './GardenDelete';

export default function GardenDetails(props) {

  const [plants, setPlants] = useState([])
  const [addPlant, setAddPlant] = useState(false)

  const [weather, setWeather] = useState({});
  const [weatherDetails, setWeatherDetails] = useState({});

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${props.location}&units=metric&appid=a2662e448644542c9ee3b85b621ce010`)
      .then(res => {
        setWeather(res.data.main);
        setWeatherDetails(res.data.weather[0]);
      })
      .catch((err) => console.log(err))
  }, [])

  const minTemp = parseInt(weather.temp_min);
  const maxTemp = parseInt(weather.temp_max);
  const currentTemp = parseInt(weather.temp);

  // console.log(maxTemp, minTemp, currentTemp)
  const weatherImg = `http://openweathermap.org/img/wn/${weatherDetails.icon}@2x.png`;
  const description = weatherDetails.description;

  console.log(weatherImg, description)

  const findGarden = (gardenId) => {
    axios.get(`/gardens/${gardenId}/plants`)
      .then(({ data: plants }) => {
        setPlants(plants);
      })
  }

  const plantCard = plants.map(plant =>
    <PlantCardList
      key={plant.id}
      id={plant.id}
      img={plant.image_url}
      name={plant.name}
      wateringTime={plant.watering_time}
      gardenId={props.id}
    />
  );

  return (
    <div>
      {/* <button onClick={() => addGarden()}>Add a New Garden [+]</button> */}
      <button onClick={() => findGarden(props.id)}>{props.title}</button>
      Location: {props.location}
      <GardenUpdate
        loggedInUser={props.loggedInUser}
        id={props.id}
        title={props.title}
        location={props.location}
        updateGarden={props.updateGarden}

      />
      <button onClick={() => setAddPlant(!addPlant)}>Add Plant</button>

      <img src={weatherImg} />
      <h6>{description}</h6>
      <h4>Temperature {currentTemp}</h4>
      <h6>Min {minTemp} Max {maxTemp}</h6>
      {!addPlant &&
        <ul>{plantCard}</ul>
      }
      {addPlant &&
        <AllPlants
          loggedInUser={props.loggedInUser}
          plants={props.plants}
          gardenId={props.id}
        />
      }
      <GardenDelete
        loggedInUser={props.loggedInUser}
        id={props.id}
        deleteGarden={props.deleteGarden}
      />
      <br />
      <br />
      <br />
    </div>
  )
}