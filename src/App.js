import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import AtomSpinner from '@bit/bondz.react-epic-spinners.atom-spinner';
import ChartwithData from './components/chart';
import ClockWidget from './components/daily/clockwidget';




function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
