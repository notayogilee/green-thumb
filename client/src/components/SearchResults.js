import React, { useState, useEffect } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import './PlantListItem.css'

export default function SearchResults(props) {

  const [show, setShow] = useState(false);

  useEffect(() => {

    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
      onOpenStart: true,
      inDuration: 250
    });

  }, [show])


  return (
    <>
      {!show &&
        <div class="row">
          <div class="col s12 m12">
            <div class="card">
              <div class="card-image image">
                <img src={props.img} alt="img" />
                <span class="card-title">{props.name}</span>
                <a onClick={(() => { setShow(!show) })} class="btn-floating halfway-fab waves-effect waves-light green lighten-2"><i class="lni lni-question-circle"></i></a>
              </div>
              {/* <div class="card-content">

              </div> */}
            </div>
          </div>
        </div>
      }

      {
        show &&

        <div class="row center">
          <div class="col s12 m12 ">
            <div class="card">
              <div class="card-image green lighten-2">
                <img class="responsive-img" src={props.img} alt="img" />
                <span class="card-title">{props.name}</span>
                <a href="/" class="btn-floating btn-large halfway-fab waves-effect waves-light green lighten-2"><i class="lni lni-home"></i></a>
              </div>
              <ul class="collapsible">
                <li>
                  <div class="collapsible-header green lighten-2"><i class="lni lni-question-circle"></i>Description</div>
                  <div class="collapsible-body green lighten-3"><h5>{props.description}</h5></div>
                </li>
                <li>
                  <div class="collapsible-header green lighten-2"><i class="fas fa-faucet"></i>Watering</div>
                  <div class="collapsible-body green lighten-3"><h5>{props.watering}</h5></div>
                </li>
                <li>
                  <div class="collapsible-header green lighten-2"><i class="lni lni-angle-double-right"></i>Feeding</div>
                  <div class="collapsible-body green lighten-3"><h5>{props.feeding}</h5></div>
                </li>
                <li>
                  <div class="collapsible-header green lighten-2"><i class="fas fa-disease"></i>Diseases</div>
                  <div class="collapsible-body green lighten-3"><h5>{props.diseases}</h5></div>
                </li>
                <li>
                  <div class="collapsible-header green lighten-2"><i class="fas fa-seedling"></i>Grow from seed</div>
                  <div class="collapsible-body green lighten-3"><h5>{props.growing_from_seed}</h5></div>
                </li>
                <li>
                  <div class="collapsible-header green lighten-2"><i class="lni lni-angle-double-right"></i>Harvesting</div>
                  <div class="collapsible-body green lighten-3"><h5>{props.harvesting}</h5></div>
                </li>

                <li>
                  <div class="collapsible-header green lighten-2"><i class="fas fa-vial"></i>Soil conditions</div>
                  <div class="collapsible-body green lighten-3"><h5>{props.optimal_soil}</h5></div>
                </li>
                <li>
                  <div class="collapsible-header green lighten-2"><i class="fas fa-star-of-life"></i>Care tips</div>
                  <div class="collapsible-body green lighten-3"><h5>{props.other_care}</h5></div>
                </li>
                <li>
                  <div class="collapsible-header green lighten-2"><i class="fas fa-bug"></i>Known pests</div>
                  <div class="collapsible-body green lighten-3"><h5>{props.pests}</h5></div>
                </li>
                <li>
                  <div class="collapsible-header green lighten-2"><i class="far fa-clipboard"></i>Special planting considerations</div>
                  <div class="collapsible-body green lighten-3"><h5>{props.planting_considerations}</h5></div>
                </li>
                <li>
                  <div class="collapsible-header green lighten-2"><i class="lni lni-line-spacing"></i>Plant spacing</div>
                  <div class="collapsible-body green lighten-3"><h5>{props.spacing}</h5></div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      }
    </>
  )
}