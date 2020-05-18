import React from 'react';

export default function PlantListItem(props) {

  return (

    <div class="col s12 m8 offset-m2 l6 offset-l3">
      <div class="card-panel grey lighten-5 z-depth-1">
        <h2 class="center">{props.location.state.name}</h2>
        <div class="row valign-wrapper">
          <div class="col s8">
            <img src={props.location.state.image_url} class="circle center" alt={props.location.state.name}></img>
          </div>
          <div class="row s10">
            <div class="black-text">
            </div>
          </div>
        </div>
        <p>{props.location.state.description}</p>
        <h5>Suggested watering</h5>
        <p>{props.location.state.watering}</p>
        <h5>Feeding</h5>
        <p>{props.location.state.feeding}</p>
        <h5>Known diseases</h5>
        <p>{props.location.state.diseases}</p>
        <h5>How to grow from seed</h5>
        <p>{props.location.state.growing_from_seed}</p>
        <h5>Harvesting</h5>
        <p>{props.location.state.harvesting}</p>
        <h5>Optimal soil conditions</h5>
        <p>{props.location.state.optimal_soil}</p>
        <h5>Other care tips</h5>
        <p>{props.location.state.other_care}</p>
        <h5>Known pests</h5>
        <p>{props.location.state.pests}</p>
        <h5>Special planting considerations</h5>
        <p>{props.location.state.planting_considerations}</p>
        <h5>Plant spacing</h5>
        <p>{props.location.state.spacing}</p>

        <p>{props.location.state.storage}</p>
        <h5>Transplanting</h5>
        <p>{props.location.state.transplanting}</p>
        <h5>When to plant</h5>
        <p>{props.location.state.when_to_plant}</p>
        <p>{props.location.state.watering_time}</p>
        <div class="card-action center">
          <a href="/">Home</a>
        </div>
      </div>
    </div>

  )
}