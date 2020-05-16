import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Register from './components/Auth/Register';
import Register_NEW from './components/Auth/Register_NEW';
// import Login from './components/Auth/Login';
import Login_NEW from './components/Auth/Login_NEW';

import './App.css';
import PlantListItem from './components/PlantListItem';


function App() {

  return (

    <div>
      <Navbar />
      <Switch>

        <Route path='/login' component={Login_NEW} />
        {/* <Route path='/login' component={Login} /> */}
        {/* <Route path='/register' component={Register} /> */}
        <Route path='/register' component={Register_NEW} />
        <Route path='/' component={Home} />
      </Switch>

    </div>

  );
}

export default App;
