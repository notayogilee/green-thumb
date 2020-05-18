import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import SearchResults from './SearchResults';

export default function AllPlants(props) {


  console.log("home props", props)

  const [searchPlant, setSearchPlant] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchPlant(event.target.value);
  };

  useEffect(() => {

    const results = props.plants.filter(plant =>
      plant.name.toLowerCase().includes(searchPlant)
    );
    setSearchResults(results);
    //eslint-disable-next-line
  }, [searchPlant]);

  return (
    <div>

      <nav>
        <div class="nav-wrapper">
          <form>
            <div class="input-field">
              <input
                class="center"
                id="search"
                type="search"
                value={searchPlant}
                placeholder="Search for a plant"
                onChange={handleChange}>
              </input>
              <label class="center label-icon" for="search"><i class="material-icons">search</i></label>
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
            name={plant.name}
            img={plant.image_url}
          />
        ))}
      </ul>

      {(searchResults.length === 0 && searchPlant.length > 0) &&
        <h2>That plant was not found!</h2>
      }

    </div>
  )
}