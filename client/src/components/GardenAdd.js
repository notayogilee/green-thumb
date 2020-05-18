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


export default function GardenAdd(props) {
  const [toggle, setToggle] = useState(false)
  const [garden, setGarden] = useState({
    title: "",
    location: ""
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
      .post(`http://localhost:3000/users/${props.loggedInUser.user.id}/gardens`, 
      {
        title: garden.title,
        location: garden.location
      })
      .then((res => {
        console.log("response from AddGarden", res)
        setToggle(!toggle)
        props.addNewGarden(res.data)
      }))
      .catch(err => {
        console.log("AddGarden Error", err)
      })
  };
//  onClick={() => setToggle(!toggle)}
  return (
    <div>
    <button onClick={() => setToggle(!toggle)}>Add a New Garden [+]</button>
      {
        toggle &&
      <form className="form" onSubmit={submitGarden}>
        <div className="container login-form">

          <input
            type="text"
            name="title"
            value={garden.title}
            placeholder="Enter your new garden's title"
            onChange={handleChange}
            required
            />

          <input
            type="text"
            name="location"
            value={garden.location}
            placeholder="Enter your new garden's Location (city)"
            onChange={handleChange}
            required
            />

          <button type="submit"> Add Garden! </button>

        </div>
      </form>
    }
      </div>
  )
}
