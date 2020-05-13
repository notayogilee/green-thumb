import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

import './App.css';
import PlantList from './components/PlantList';
import PlantCard from './components/PlantCard';
import PlantListItem from './components/PlantListItem';

function App() {

  // useEffect(() => {

  axios.get('/users')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  // }, [])



  return (

    <div>
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/' component={Home} />
      </Switch>

    </div>

  );
}

export default App;
