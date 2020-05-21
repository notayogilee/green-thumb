import React, { useState, useEffect } from 'react';
import axios from 'axios';

import M from 'materialize-css'
import 'materialize-css'

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

useEffect( () => {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {
    opacity: 0.2
  });
}, [])

  return (
    <div>

      <button 
        className="btn green modal-trigger"
        href={`#garden-add${props.id}`}
        onClick={() => setToggle(!toggle)}
      >
        <i class="material-icons">edit</i>
      </button>

      {
        // toggle &&
        <div id={`garden-add${props.id}`} class="modal col s12 m6 l3 green accent-1">

          <form className="modal-content"
            className="form" 
            // id='dropdown1'
            onSubmit={submitGarden}
          >
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
              <br/>
              <div></div>
            </div>
          </form>
        </div>
      }
    </div>
  )
}
