import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlantCard from './PlantCard';

export default function Garden(props) {

  const [state, setState] = useState({
    users: [],
    plants: [],
    gardens: []
  })

  useEffect(() => {
    Promise.all([
      axios.get('/users'),
      axios.get('/plants'),
      axios.get('/gardens')
    ]).then((all) => {
      setState(prev => ({ ...prev, users: all[0].data, plants: all[1].data, gardens: all[2].data }));
    })
      .catch(err => console.log(err))
  }, [])

  console.log(state)
  return (

    <PlantCard />
  )
}