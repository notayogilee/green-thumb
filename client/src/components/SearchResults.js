import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function SearchResults(props) {

  const [show, setShow] = useState(false);

  return (
    <>
      {!show &&
        <div class="col s12 m8 offset-m2 l6 offset-l3" >
          <div class="card-panel hoverable grey lighten-5 z-depth-1">
            <div class="row valign-wrapper">
              <div class="col s2">
                <img src={props.img} alt="" class="circle responsive-img" />
              </div>
              <div class="col s10">
                <h4>{props.name}</h4>
                <span class="black-text">
                  {props.description}
                </span>
                <br />
                <Button name="More Info" onclick={(() => { setShow(!show) })}></Button>
              </div>
            </div>
          </div>
        </div>
      }

      {
        show &&
        <div class="col s12 m8 offset-m2 l6 offset-l3">
          <Button name="Back" onclick={(() => {
            setShow(!show);
            props.clearSearch()
          })}></Button>
          <div class="card-panel grey lighten-5 z-depth-1">
            <h2 class="center">{props.name}</h2>
            <div class="row valign-wrapper">
              <div class="col s8">
                <img src={props.img} class="circle center" alt={props.name}></img>
              </div>
              <div class="row s10">
                <div class="black-text">
                </div>
              </div>
            </div>
            <p>{props.description}</p>
            <h5>Suggested watering</h5>
            <p>{props.watering}</p>
            <h5>Feeding</h5>
            <p>{props.feeding}</p>
            <h5>Known diseases</h5>
            <p>{props.diseases}</p>
            <h5>How to grow from seed</h5>
            <p>{props.growing_from_seed}</p>
            <h5>Harvesting</h5>
            <p>{props.harvesting}</p>
            <h5>Optimal soil conditions</h5>
            <p>{props.optimal_soil}</p>
            <h5>Other care tips</h5>
            <p>{props.other_care}</p>
            <h5>Known pests</h5>
            <p>{props.pests}</p>
            <h5>Special planting considerations</h5>
            <p>{props.planting_considerations}</p>
            <h5>Plant spacing</h5>
            <p>{props.spacing}</p>

            <p>{props.storage}</p>
            <h5>Transplanting</h5>
            <p>{props.transplanting}</p>
            <h5>When to plant</h5>
            <p>{props.when_to_plant}</p>
            <p>{props.watering_time}</p>
            {/* <p><a class="center" href="/">Home</a></p> */}
            <Link to="/gardens">
              <Button name="gardens" />
            </Link>
          </div>
        </div>
      }
    </>
  )
}