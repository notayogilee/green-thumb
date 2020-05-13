import React from 'react';

export default function PlantCardList(props) {

  return (

    <div>


      <h3>{props.name}</h3>
      <img src={props.img} alt="img"></img>

    </div>



  )
}