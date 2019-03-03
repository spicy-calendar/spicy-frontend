import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./containers/Login";
import Calendar from './containers/Calendar';
import EventCards from './components/EventCard';
import MainView from './containers/MainView';
import AuthRoute from './containers/AuthRoute';

import AppRouter from './routers/AppRouter';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h3>SMART CALENDAR</h3>
        </header>
        <AppRouter/>
      </div>
    );
  }
}

export default App;
