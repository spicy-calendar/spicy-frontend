import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import MainView from "./MainView";
import "./Login.css";


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
                    
                    <NavLink to="/MainView"><Button>Login</Button></NavLink>
                    
                </form>
            </div>
        );
    }
}