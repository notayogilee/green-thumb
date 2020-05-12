import React, { useEffect } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

function App() {
  useEffect(() => {
    axios.get('/users')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])

  return (



    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
