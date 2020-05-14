import React from 'react';


export default function PlantListItem(props) {
  return (

    <div>

      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name}></img>
      <p>{props.description}</p>
      <p>{props.watering}</p>
      <p>{props.feeding}</p>
      <p>{props.diseases}</p>
      <p>{props.growing_from_seed}</p>
      <p>{props.harvesting}</p>
      <p>{props.optimal_soil}</p>
      <p>{props.other_care}</p>
      <p>{props.pests}</p>
      <p>{props.planting_considerations}</p>
      <p>{props.spacing}</p>
      <p>{props.storage}</p>
      <p>{props.transplanting}</p>
      <p>{props.when_to_plant}</p>

    </div>
  )
}