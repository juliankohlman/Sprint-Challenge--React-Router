import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home, Mac, Ipad, Iphone, Watch, Navigation } from './components';
import { Route } from 'react-router-dom';

// import components
// import route

const App = () => (
  <div className="App">
    {/*<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>*/}
    <Navigation />
     <div>
      <h1>Think different</h1>
    </div>

    <Route path="/mac" component={Mac} />
    <Route path="/ipad" component={Ipad} />
    <Route path="/iphone" component={Iphone} />
    <Route path="/watch" component={Watch} />

  </div>
);


export default App;
