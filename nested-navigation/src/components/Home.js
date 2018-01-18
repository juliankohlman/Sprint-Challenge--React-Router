import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

// sub item functional components here

const Home = () => {
  return ( // Make this your pseudo home 'state' display a welcome message add it to the navigation
    <div>
      <h1>Home of Apple product line</h1>
      <p>Some welcome message</p>
    </div>
  )
}

export default Home;