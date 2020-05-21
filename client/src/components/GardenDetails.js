import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PlantCardList from './PlantCardList';
import AllPlants from './AllPlants';
import GardenUpdate from './GardenUpdate';
import GardenDelete from './GardenDelete';

import "./GardenDetails.css"

import M from 'materialize-css'
import 'materialize-css'

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

    // var elems = document.querySelectorAll('.dropdown-trigger');
    // M.Dropdown.init(elems, {
    //   hover: true
    // });
    M.AutoInit();
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
      // onOpenEnd: () => props.handleSuccessfulAuth(props.loggedInUser)
    });
    // M.Modal.getInstance(document.querySelectorAll('modal2'));
    // M.Modal.getInstance(document.querySelectorAll('modal3'));
    // return () => props.handleSuccessfulAuth()


  }, [])

  const minTemp = parseInt(weather.temp_min);
  const maxTemp = parseInt(weather.temp_max);
  const currentTemp = parseInt(weather.temp);

  // console.log(maxTemp, minTemp, currentTemp)
  const weatherImg = `http://openweathermap.org/img/wn/${weatherDetails.icon}@2x.png`;
  const description = weatherDetails.description;

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

        {/* <div className="container"> */}
        <div id="weather">
          <img src={weatherImg} width="100" height="100" alt="img" />
          <h6>{description}</h6>
          <h6>Temperature {currentTemp} °C</h6>
          Min: {minTemp} Max: {maxTemp}
        </div>
        {/* </div> */}
        <div className="weather card-content">
          <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right">more_vert</i></span>
          <h6> Location: {props.location} </h6>
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
          <p><a href="#">This is a link</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i>Card Title</span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
        {/* <h5>{props.title}</h5> */}

        {/* <div className="container">
     <h6> Location: </h6>
     <h6>{props.location} </h6>
    <img src={weatherImg} />
    <h6>{description}</h6>
    <h5>Temperature {currentTemp} °C</h5>
    <h6>Min: {minTemp} Max: {maxTemp}</h6>
      </div> */}
      </div>
      <br />

      {/* <!-- Modal Trigger --> */}
      <button
        class="waves-effect waves-light btn modal-trigger"
        href={`#show${props.id}`}
        onClick={() => findGarden(props.id)}
      >Show {props.title} plants</button>
      {/* <a class="waves-effect waves-light btn modal-trigger" href="#modal2">Modal</a> */}
      {/* <!-- Modal Structure --> */}
      <div id={`show${props.id}`} class="modal">
        <div class="modal-content">
          <h4>Plant in {props.title}</h4>
          <AllPlants
            loggedInUser={props.loggedInUser}
            plants={props.plants}
            gardenId={props.id}
          />
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>

      {/* <!-- Modal Trigger --> */}
      <button
        class="waves-effect waves-light btn modal-trigger"
        // href="#modal3"
        href={`#planted${props.id}`}
        onClick={() => findGarden(props.id)}
      >Plant list</button>
      {/* <a class="waves-effect waves-light btn modal-trigger" href="#modal2">Modal</a> */}

      {/* <!-- Modal Structure --> */}
      <div ref={M} id={`planted${props.id}`} class="modal">
        {/* <div ref={M} id="modal3" class="modal"> */}
        <div class="modal-content">
          <h4>Planted in {props.title}</h4>

          <ul>{plantCard}</ul>
        </div>
        <div class="modal-footer">
          <Link to='/'>
            <a class="modal-close waves-effect waves-green btn-flat">Garden</a>
          </Link>
        </div>
      </div>
      {/* <button onClick={() => setAddPlant(!addPlant)}>Add Plant</button> */}

      {/* {!addPlant && */}
      {/* <ul>{plantCard}</ul> */}
      {/* }
      {addPlant &&
        <AllPlants
          loggedInUser={props.loggedInUser}
          plants={props.plants}
          gardenId={props.id}
        />
      } */}
      <br />
      <br />
    </div>
  )
}