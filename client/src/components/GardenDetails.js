import React from 'react';

export default function GardenDetails(props) {

  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.location}</h2>
    </div>
  )
}