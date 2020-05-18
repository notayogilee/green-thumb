import React from 'react';

export default function SearchResults(props) {
  return (

    <div class="col s12 m8 offset-m2 l6 offset-l3">
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
            {/* <Button name="More Info" onclick={() => handleShow(props.id)}></Button> */}
          </div>
        </div>
      </div>
    </div>

  )
}