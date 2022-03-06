import React, { Component } from 'react';
import Login from '../components/Login.js';
import MainContainer from './MainContainer.js';
import { useState } from 'react';

// use useContext instead grab context from Login
// const [ loggedIn ] = useState('');

document.getElementById('client_id').content = process.env.CLIENT_ID;

// class App extends Component {
const App = () => {
  return (
    <>
      {/* if not logged in, render this */}
      {/* <Login /> */}
      {/* if logged in, render dashboard */}
      <MainContainer />
    </>
  );
};

export default App;
