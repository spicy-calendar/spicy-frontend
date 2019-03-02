import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./containers/Login";

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <text>SMART CALENDAR</text>
        </header>
        <Login/>
      </div>
    );
  }
}

export default App;
