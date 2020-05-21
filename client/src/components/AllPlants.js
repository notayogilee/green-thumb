import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import SearchResults from './SearchResults';
import './AllPlants.css';

export default function AllPlants(props) {

  const [searchPlant, setSearchPlant] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchPlant(event.target.value);
  };

  const clearSearch = function () {
    setSearchPlant('');
  }

  useEffect(() => {

    const results = props.plants.filter(plant =>
      plant.name.toLowerCase().includes(searchPlant)
    );
    setSearchResults(results);
    //eslint-disable-next-line
  }, [searchPlant]);

  return (
    <div>

      <nav className=" border secondary-color green lighten-2">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                className="secondary-color"
                id="search"
                type="search"
                value={searchPlant}
                placeholder="Search for a plant"
                onChange={handleChange}>
              </input>
              <label className=" center label-icon" htmlFor="search"><i className="secondary-color material-icons">search</i></label>
            </div>
          </form>
        </div>
      </nav>



      {searchPlant.length === 0 &&

        <PlantCard
          loggedInUser={props.loggedInUser}
          gardenId={props.gardenId}
        />
      }

      <ul>
        {searchResults.length > 0 && searchResults.map(plant => (
          <SearchResults
            key={plant.id}
            id={plant.id}
            name={plant.name}
            description={plant.description}
            feeding={plant.feeding}
            diseases={plant.description}
            growing_from_seed={plant.growing_from_seed}
            harvesting={plant.harvesting}
            img={plant.image_url}
            optimal_soil={plant.optimal_soil}
            other_care={plant.other_care}
            pests={plant.pests}
            planting_considerations={plant.planting_considerations}
            spacing={plant.spacing}
            storage={plant.storage_use}
            transplanting={plant.transplanting}
            watering={plant.watering}
            when_to_plant={plant.when_to_plant}
            watering_time={plant.watering_time}
            clearSearch={clearSearch}
            loggedInUser={props.loggedInUser}
          />
        ))}
      </ul>

      {(searchResults.length === 0 && searchPlant.length > 0) &&
        <h2>That plant was not found!</h2>
      }

    </div>
  )
}