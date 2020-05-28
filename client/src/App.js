import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
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


  const addNewGarden = function (gardenData) {

    setState({
      ...state,
      gardens: [...state.gardens, gardenData]
    });
  }

  const updateGarden = function (gardenData) {
    setState({
      ...state,
      gardens: state.gardens.map(garden => {

        // if they are the same id => update
        if (garden.id === gardenData.id) {
          return gardenData;
        }
        return garden;
      })
    })
  }


  const deleteGarden = function (gardenId) {
    setState({
      ...state,
      gardens: state.gardens.filter(garden => garden.id !== gardenId)
    });
  }

  const handleSuccessfulAuth = userData => {
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
        handleLogoutState();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  };

  return (

    <div>
      <SideBar loggedInUser={state.user} handleLogoutClick={handleLogoutClick} />
      <Switch>
        <Route path='/login' render={(props) => <Login_NEW {...props} loggedInUser={state.user} handleSuccessfulAuth={handleSuccessfulAuth} />} />
        <Route path='/register' render={(props) => <Register_NEW {...props} handleSuccessfulAuth={handleSuccessfulAuth} />} />
        <Route
          path='/gardens'
          render={(props) => <Gardens
            {...props}
            gardens={state.gardens}
            plants={state.plants}
            loggedInUser={state.user}
            addNewGarden={addNewGarden}
            updateGarden={updateGarden}
            deleteGarden={deleteGarden} />}
        />
        <Route path='/plant' render={(props) => <PlantListItem {...props} plants={state.plants} loggedInUser={state.user} />} />
        <Route path='/' render={(props) => <AllPlants {...props} plants={state.plants} loggedInUser={state.user} />} />
      </Switch>
    </div>
  );
}

export default App;
