import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Garden from './components/Garden';
import PlantListItem from './components/PlantListItem';

import './App.css';

function App() {

  return (

    <div>
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/garden' component={Garden} />
        <Route path='/plant' component={PlantListItem} />
        <Route path='/' component={Home} />
      </Switch>

    </div>

  );
}

export default App;
