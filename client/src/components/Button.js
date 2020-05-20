import React from 'react';
import './Button.css';

export default function Button(props) {

  return (
    <button
      className="waves-effect btn transparent"
      onClick={props.onclick}
    >
      {props.name}
    </button>
  );

}