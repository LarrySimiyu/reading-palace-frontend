import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class searchScreenplay extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchInput: "",
            screenplays: [],
            filteredScreenplays: []

         }
    }


filter = () => {
    const filtered = this.state.screenplays.filter(screenplay => {
        return screenplay.title == this.state.searchInput;
    });
    this.setState({
        filteredScreenplays: filtered
    });
};


handleInputChange = event => {
    this.setState(
        {
            searchInput: event.target.value
        },
        () => this.filter()
        );
};

    render() { 
        return (  );
    }
}
 
export default searchScreenplay;