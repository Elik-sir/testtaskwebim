import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Particles from 'react-particles-js';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Signin from './components/SignIn';
import Register from './components/Register';

import './App.css';
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
const App = ({ token, isLoading }) => {
  return (
    <div className='App'>
      <Particles className='particles' params={particlesOptions} />

      <Navigation />
      <Switch>
        <Route
          exact
          path='/'
          render={() => (token ? <Home /> : <Redirect to='/signin' />)}
        />
        <Route
          path='/signin'
          render={() => (token ? <Redirect to='/' /> : <Signin />)}
        />
        <Route path='/register' component={Register} />
      </Switch>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.user.isLoading,
  token: state.user.token,
});
export default connect(mapStateToProps)(App);
