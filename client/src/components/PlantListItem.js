import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";
import './PlantListItem.css'

export default function PlantListItem(props) {

  useEffect(() => {

    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
      onOpenStart: true,
      inDuration: 250
    });

  }, [])

  return (

    <div class="row center padding">
      <div class="col s12 m12 ">
        <div class="card">
          <div class="card-image">
            <img width="200px" height="400px" alt="img" src={props.location.state.image_url} />
            <span class="card-title">{props.location.state.name}</span>
            <Link to="/">
              <a class="btn-floating btn-large halfway-fab waves-effect waves-light green lighten-2"><i class="lni lni-home"></i></a>
            </Link>
          </div>
          <ul class=" no-marg collapsible">
            <li>
              <div class="collapsible-header green lighten-2"><i class="lni lni-question-circle"></i>Description</div>
              <div class="collapsible-body green lighten-3"><h5>{props.location.state.description}</h5></div>
            </li>
            <li>
              <div class="collapsible-header green lighten-2"><i class="fas fa-faucet"></i>Watering</div>
              <div class="collapsible-body green lighten-3"><h5>{props.location.state.watering}</h5></div>
            </li>
            <li>
              <div class="collapsible-header green lighten-2"><i class="lni lni-angle-double-right"></i>Feeding</div>
              <div class="collapsible-body green lighten-3"><h5>{props.location.state.feeding}</h5></div>
            </li>
            <li>
              <div class="collapsible-header green lighten-2"><i class="fas fa-disease"></i>Diseases</div>
              <div class="collapsible-body green lighten-3"><h5>{props.location.state.diseases}</h5></div>
            </li>
            <li>
              <div class="collapsible-header green lighten-2"><i class="fas fa-seedling"></i>Grow from seed</div>
              <div class="collapsible-body green lighten-3"><h5>{props.location.state.growing_from_seed}</h5></div>
            </li>
            <li>
              <div class="collapsible-header green lighten-2"><i class="lni lni-angle-double-right"></i>Harvesting</div>
              <div class="collapsible-body green lighten-3"><h5>{props.location.state.harvesting}</h5></div>
            </li>

            <li>
              <div class="collapsible-header green lighten-2"><i class="fas fa-vial"></i>Soil conditions</div>
              <div class="collapsible-body green lighten-3"><h5>{props.location.state.optimal_soil}</h5></div>
            </li>
            <li>
              <div class="collapsible-header green lighten-2"><i class="fas fa-star-of-life"></i>Care tips</div>
              <div class="collapsible-body green lighten-3"><h5>{props.location.state.other_care}</h5></div>
            </li>
            <li>
              <div class="collapsible-header green lighten-2"><i class="fas fa-bug"></i>Known pests</div>
              <div class="collapsible-body green lighten-3"><h5>{props.location.state.pests}</h5></div>
            </li>
            <li>
              <div class="collapsible-header green lighten-2"><i class="far fa-clipboard"></i>Special planting considerations</div>
              <div class="collapsible-body green lighten-3"><h5>{props.location.state.planting_considerations}</h5></div>
            </li>
            <li>
              <div class="collapsible-header green lighten-2"><i class="lni lni-line-spacing"></i>Plant spacing</div>
              <div class="collapsible-body green lighten-3"><h5>{props.location.state.spacing}</h5></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}