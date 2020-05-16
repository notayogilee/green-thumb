import React from 'react';

export default function SearchResults(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name}></img>
    </div>
  )
}