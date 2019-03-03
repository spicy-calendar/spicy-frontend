import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./containers/Login";
import Calendar from './containers/Calendar';
import EventCards from './components/EventCard';
import MainView from './containers/MainView';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h3>SMART CALENDAR</h3>
        </header>
        <MainView/>
        {/* <Login/> */}
      </div>
    );
  }
}

export default App;
