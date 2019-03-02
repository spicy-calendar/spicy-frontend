import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./containers/Login";
import Calendar from './containers/Calendar';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h3>SMART CALENDAR</h3>
        </header>
        <Calendar/>
      </div>
    );
  }
}

export default App;
