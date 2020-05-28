import React, { useState } from 'react';
import axios from 'axios';


export default function GardenDelete(props) {

  const [toggle, setToggle] = useState(false)

  const removeGarden = function () {
    axios
      .delete(`http://localhost:3000//users/${props.loggedInUser.user.id}/gardens/${props.id}`)
      .then(res => {
        props.deleteGarden(props.id)
      })
      .catch(err => {
        console.log("removeGarden Error", err)
      })
  };

  return (
    <div>
      <button
        className="btn red modal-trigger"
        href={`#garden-delete${props.id}`}
        onClick={() => setToggle(!toggle)}
      >
        <i class="material-icons">delete</i>
      </button>
      {
        <div id={`garden-delete${props.id}`} class="modal col s6 m6 l3 green accent-1">
          <div className="modal-content">
            <h4>Are you sure?</h4>
            <button
              className="btn red modal-trigger"
              onClick={removeGarden}>Yes, I'm sure.</button>
          </div>
        </div>
      }
    </div>
  )
}