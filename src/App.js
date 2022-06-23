import React from 'react'

import './App.css';
import Navbar from './Navbar/Nav.js'
import { HashRouter, Route, Switch } from 'react-router-dom'

const App = () => (

    <HashRouter>
    {/* //BEM convention */}
    <div className="app">
      < Navbar />
      {/* Home */}
    </div>
    </HashRouter>
  
)
  
export default App;
