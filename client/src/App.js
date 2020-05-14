import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PlantCard from './components/PlantCard';
import Register from './components/Register';
import Login from './components/Login';

import './App.css';
import PlantListItem from './components/PlantListItem';
import PlantCardList from './components/PlantCardList';


function App() {


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
