import React from 'react';
import M from "materialize-css/dist/js/materialize.min.js";

export default function PlantListItem(props) {

  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
      onOpenStart: true,
      inDuration: 250
    });
  });


  return (

    <div class="row center">
      <div class="col s12 m12 ">
        <div class="card">
          <div class="card-image">
            <img class="responsive-img" src={props.location.state.image_url} />
            <h1 class="card-title ">{props.location.state.name}</h1>
            <a href="/" class="btn-floating btn-large halfway-fab waves-effect waves-light red"><i class="lni lni-home"></i></a>
          </div>
          <ul class="collapsible">
            <li>
              <div class="collapsible-header"><i class="lni lni-question-circle"></i>Description</div>
              <div class="collapsible-body"><span>{props.location.state.description}</span></div>
            </li>
            <li>
              <div class="collapsible-header"><i class="fas fa-faucet"></i>Watering</div>
              <div class="collapsible-body"><span>{props.location.state.watering}</span></div>
            </li>
            <li>
              <div class="collapsible-header"><i class="lni lni-angle-double-right"></i>Feeding</div>
              <div class="collapsible-body"><span>{props.location.state.feeding}</span></div>
            </li>
            <li>
              <div class="collapsible-header"><i class="fas fa-disease"></i>Diseases</div>
              <div class="collapsible-body"><span>{props.location.state.diseases}</span></div>
            </li>
            <li>
              <div class="collapsible-header"><i class="fas fa-seedling"></i>Grow from seed</div>
              <div class="collapsible-body"><span>{props.location.state.growing_from_seed}</span></div>
            </li>
            <li>
              <div class="collapsible-header"><i class="lni lni-angle-double-right"></i>Harvesting</div>
              <div class="collapsible-body"><span>{props.location.state.harvesting}</span></div>
            </li>

            <li>
              <div class="collapsible-header"><i class="fas fa-vial"></i>Soil conditions</div>
              <div class="collapsible-body"><span>{props.location.state.optimal_soil}</span></div>
            </li>
            <li>
              <div class="collapsible-header"><i class="fas fa-star-of-life"></i>Care tips</div>
              <div class="collapsible-body"><span>{props.location.state.other_care}</span></div>
            </li>
            <li>
              <div class="collapsible-header"><i class="fas fa-bug"></i>Known pests</div>
              <div class="collapsible-body"><span>{props.location.state.pests}</span></div>
            </li>
            <li>
              <div class="collapsible-header"><i class="far fa-clipboard"></i>Special planting considerations</div>
              <div class="collapsible-body"><span>{props.location.state.planting_considerations}</span></div>
            </li>
            <li>
              <div class="collapsible-header"><i class="lni lni-line-spacing"></i>Plant spacing</div>
              <div class="collapsible-body"><span>{props.location.state.spacing}</span></div>
            </li>
          </ul>
        </div>
      </div>
    </div>



  )
}