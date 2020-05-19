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

  console.log(props)

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
    <div className="col s12 m3 l3">
      <div className="card medium">
      <div className="row">
      <div className="col s24">

      <GardenUpdate 
        loggedInUser={props.loggedInUser} 
        id={props.id}
        title={props.title}
        location={props.location}
        updateGarden={props.updateGarden}
        
        />
        </div>
      <div className="col s24">
      <GardenDelete
        loggedInUser={props.loggedInUser} 
        id={props.id}
        deleteGarden={props.deleteGarden}
        />
        </div>
        </div>

        <div className="container">
       <h6> Location: </h6>
       <h6>{props.location} </h6>
      <img src={weatherImg} />
      <h6>{description}</h6>
      <h5>Temperature {currentTemp} °C</h5>
      <h6>Min: {minTemp} Max: {maxTemp}</h6>
        </div>
      </div>
      <br />
      <button onClick={() => findGarden(props.id)}>{props.title}</button>
      <button onClick={() => setAddPlant(!addPlant)}>Add Plant</button>
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
       <br />
       <br />
    </div>
  )
}