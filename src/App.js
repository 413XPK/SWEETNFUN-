import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Nav.js';
import Home from './components/Home/Home.js';
import { HashRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <HashRouter>
    {/* //BEM convention */}
    <div className="app">
      <Navbar />
      <Home />
    </div>
  </HashRouter>
);

export default App;
