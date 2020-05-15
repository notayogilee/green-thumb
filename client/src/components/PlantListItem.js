import React from 'react';
import { } from 'react-router-dom';


export default function PlantListItem(props) {
  console.log('props', props)
  return (
    < div >

      <h2>{props.location.state.name}</h2>
      <img src={props.location.state.image_url} alt={props.location.state.name}></img>
      <p>{props.location.state.description}</p>
      <p>{props.location.state.watering}</p>
      <p>{props.location.state.feeding}</p>
      <p>{props.location.state.diseases}</p>
      <p>{props.location.state.growing_from_seed}</p>
      <p>{props.location.state.harvesting}</p>
      <p>{props.location.state.optimal_soil}</p>
      <p>{props.location.state.other_care}</p>
      <p>{props.location.state.pests}</p>
      <p>{props.location.state.planting_considerations}</p>
      <p>{props.location.state.spacing}</p>
      <p>{props.location.state.storage}</p>
      <p>{props.location.state.transplanting}</p>
      <p>{props.location.state.when_to_plant}</p>

    </div >
  )
}