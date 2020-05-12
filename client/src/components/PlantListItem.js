import React from 'react';

export default function PlantListItem(props) {
  return (
    <div>
      <section>

        <h2>{props.name}</h2>
        <img src={props.img}></img>
        <p>{props.description}</p>
        <p>{props.watering}</p>
      </section>
    </div>
  )
}