import React, { useState, useEffect } from 'react';
import useGardenData from '../hooks/useGardenData';
import PlantCard from './PlantCard';
import SearchResults from './SearchResults';

export default function Home(props) {

  // const { state } = useGardenData();

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

      <input
        type="text"
        value={searchPlant}
        placeholder="Which plant would you like?"
        onChange={handleChange}>
      </input>

      {searchPlant.length === 0 &&

        <PlantCard />
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