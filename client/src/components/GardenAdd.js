import React, { useState } from 'react';
import axios from 'axios';


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

  return (
    <div className="row col s12">
      <button className="waves-light btn col" onClick={() => setToggle(!toggle)}>Add a New Garden [+]</button>
      {
        toggle &&
        <>

          <form onSubmit={submitGarden}>
            <div className="col s1"></div>
            <div className="row">


              <div className="input-field col s3">

                <input
                  type="text"
                  name="title"
                  value={garden.title}
                  onChange={handleChange}
                  required
                />
                <label for="title">title</label>

              </div>
              <div className="col s1"></div>
              <div className="input-field col s2">
                <input
                  type="text"
                  name="location"
                  value={garden.location}
                  onChange={handleChange}
                  required
                />
                <label for="location">location (city) </label>

              </div>
              <div className="col s1"></div>
              <div className="col s1">
                <button className="waves-effect waves-light btn" type="submit"> Add Garden! </button>
              </div>

            </div>
          </form>
        </>
      }
    </div>
  )
}
