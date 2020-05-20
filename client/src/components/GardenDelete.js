import React, { useState } from 'react';
import axios from 'axios';


export default function GardenDelete(props) {

  const [toggle, setToggle] = useState(false)

  const removeGarden = function () {
    axios
      .delete(`http://localhost:3000//users/${props.loggedInUser.user.id}/gardens/${props.id}`)
      .then(res => {
        console.log("response from removeGarden", res.data)
        props.deleteGarden(props.id)
      })
      .catch(err => {
        console.log("removeGarden Error", err)
      })
  };

  return (
    <div>
      <button className="btn red" onClick={() => setToggle(!toggle)}><i class="material-icons">delete</i></button>
      {
        toggle &&
        <>
          <h4>Are you sure?</h4>
          <button onClick={removeGarden}>Yes, I'm sure.</button>
          <button onClick={() => setToggle(!toggle)}>Cancel</button>
        </>
      }
    </div>
  )
}