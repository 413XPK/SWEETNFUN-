import React from 'react';

import './App.css';
import Navbar from './components/pages/Navbar/Nav.js';
import Home from './components/pages/Home/Home.js';
// import PopProds from './components/pages/PopProds/popular.js';
import { HashRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <HashRouter>
    {/* //BEM convention */}
    <div className="app">
      <Navbar />
      <Home />
      {/* <PopProds /> */}
    </div>
  </HashRouter>
);

export default App;
