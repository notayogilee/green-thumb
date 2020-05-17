import React from 'react';

export default function Button(props) {

  return (
    <button
      className="waves-effect waves-light btn"
      onClick={props.onclick}
    >
      {props.name}
    </button>
  );

}