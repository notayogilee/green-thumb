import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllPlants from './components/AllPlants';
import axios from 'axios';
import Register_NEW from './components/Auth/Register_NEW';
import Login_NEW from './components/Auth/Login_NEW';

import Gardens from './components/Gardens';
import PlantListItem from './components/PlantListItem';

import useGardenData from './hooks/useGardenData';

import './App.css';

function App() {

  const { state, setState } = useGardenData();

  const handleSuccessfulAuth = userData => {
    // console.log("Adding the user to the state", setState);
    setState({
      ...state,
      user: userData
    });

  }

  const handleLogoutState = function () {
    setState({
      ...state,
      user: {
        ...state.user,
        logged_in: false,
        user: null
      }
    });
  };

  const handleLogoutClick = function () {
    axios
      .delete(`http://localhost:3000/logout`, { withCredentials: true })
      .then(response => {
        console.log("Logout response : ", response)
        handleLogoutState();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  };

  return (

    <div>
      <Navbar loggedInUser={state.user} handleLogoutClick={handleLogoutClick} />
      <Switch>

        <Route path='/login' render={(props) => <Login_NEW {...props} loggedInUser={state.user} handleSuccessfulAuth={handleSuccessfulAuth} />} />
        <Route path='/register' render={(props) => <Register_NEW {...props} handleSuccessfulAuth={handleSuccessfulAuth} />} />
        <Route
          path='/gardens'
          render={(props) => <Gardens {...props} gardens={state.gardens} plants={state.plants} loggedInUser={state.user} />}
        />
        {/* <Route path='/plant' component={PlantListItem} /> */}

        <Route path='/plant' render={(props) => <PlantListItem {...props} plants={state.plants} loggedInUser={state.user} />} />

        <Route path='/' render={(props) => <AllPlants {...props} plants={state.plants} />} />

        {/* <Route path='/login' component={Login} /> */}
        {/* <Route path='/register' component={Register} /> */}
        {/* <Route path='/gardens' component={Gardens} /> */}
        {/* <Route path='/gardens/:gardenId' component={GardenDetails} /> */}
        {/* <Route path='/' component={Home} /> */}

      </Switch>

    </div>

  );
}

export default App;
