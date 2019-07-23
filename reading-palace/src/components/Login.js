import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";



class  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
            //authenticaed: false
         }
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // login = event => {
    //     event.preventDefault()  // stops from reloading the page
    // }

    render() { 
        return ( 
            <div>
                <form>
                    <h1>Login</h1>
                    <input 
                        type="text"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        
                    />
                    <input
                        type="text"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                    />
                    <button 
                        onClick={this.login}
                    >Login</button>
                </form>
            </div>
         );
    }
}
 
export default Login;