import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import MainView from "./MainView";
import "./Login.css";
import axios from "axios";
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

  responseGoogle = (response) => {
    console.log(response);
    console.log(response.accessToken);
    axios.post('http://localhost:3005/connect-calendar', {
      access_token: response.accessToken
    })
    .catch(function (error) {
      console.log("ERROR with sending access token to backend!!!!!!!!");
      //console.log(error);
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email">
            <h3>Email</h3>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <h3>Password</h3>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            disabled={this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          <GoogleLogin
            clientId="652179531177-a4udujvphg18v38brfdudna5pn0khi71.apps.googleusercontent.com"
            buttonText="Login"
            responseType='token'
            scope={"https://www.googleapis.com/auth/calendar","https://www.googleapis.com/auth/calendar.events"}
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        </form>
      </div>
    );
  }
}
