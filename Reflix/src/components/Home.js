import React, { Component } from "react";
import "../style/Home.css";
import Users from "./Users";

class Home extends Component {
    render() {
        return (
            <div>
                <h1 id="title">WHO'S WATCHING?</h1>
                <Users users={this.props.users}></Users>
            </div>
        );
    }
}

export default Home;
