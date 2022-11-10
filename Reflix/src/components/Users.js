import React, { Component } from "react";
import User from "./User";
import { Link } from "react-router-dom";
import "../style/Users.css";

class Users extends Component {
    render() {
        return (
            <div id="users">
                {this.props.users.map((u, i) => (
                    <Link to={`/catalog/${u.name}`}>
                        <User name={u.name} number={i} key={i}></User>
                    </Link>
                ))}
            </div>
        );
    }
}

export default Users;
