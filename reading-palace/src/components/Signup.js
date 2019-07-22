import React, { Component } from 'react';
import axios from "axios";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:"",
            username:"",
            password:""
         }
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render() { 
        return ( 
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        name="email"
                    />
                </form>
            </div>
         );
    }
}
 
export default ;