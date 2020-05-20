import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PlantCardList from './PlantCardList';
import Button from './Button';
import AllPlants from './AllPlants';
/* 
  Props needed : 
    loggedInUser
*/


export default function GardenUpdate(props) {
  const [toggle, setToggle] = useState(false)
  const [garden, setGarden] = useState({
    title: props.title,
    location: props.location
  })

  const handleChange = function (event) {
    setGarden({
      ...garden,
      [event.target.name]: event.target.value
    })
  };

  const submitGarden = function (event) {
    event.preventDefault();

    axios
      .put(`http://localhost:3000/users/${props.loggedInUser.user.id}/gardens/${props.id}`, 
      {
        title: garden.title,
        location: garden.location
      })
      .then((res => {
        console.log("response from submitGarden (Update)", res)
        setToggle(!toggle)
        props.updateGarden(res.data)
      }))
      .catch(err => {
        console.log("SubmitGarden (Update) Error", err)
      })
  };
//  onClick={() => setToggle(!toggle)}
  return (
    <div>
    <button className="btn green" onClick={() => setToggle(!toggle)}><i class="material-icons">edit</i></button>
      {
        toggle &&
        <div>

      <form className="form" onSubmit={submitGarden}>
        <div className="container">

          <input
            type="text"
            name="title"
            value={garden.title}
            placeholder="Edit your garden's title"
            onChange={handleChange}
            required
            />

          <input
            type="text"
            name="location"
            value={garden.location}
            placeholder="Update to your garden's new location (city)"
            onChange={handleChange}
            required
            />

          <button className="btn waves-effect waves-light" type="submit"> Update Garden! </button>

        </div>
      </form>
    </div>
    }
      </div>
  )
}
