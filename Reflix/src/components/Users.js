import React, { Component } from "react";
import User from "./User";
import "../style/Users.css";

class Users extends Component {
    render() {
        return (
            <div id="users">
                {this.props.users.map((u, i) => (
                    <User name={u} key={i}></User>
                ))}
            </div>
        );
    }
}

export default Users;
