import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Signin from './components/SignIn';
import Register from './components/Register';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  const particlesOptions = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
    },
  };
  return (
    <div className='App'>
      <Particles className='particles' params={particlesOptions} />
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={Signin} />
        <Route path='/register' component={Register} />
      </Switch>
    </div>
  );
};

export default App;
