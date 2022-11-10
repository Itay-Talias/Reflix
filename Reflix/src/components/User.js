import React, { Component } from "react";
import "../style/User.css";

class User extends Component {
    numberToString(num) {
        let dict = {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
        };
        return dict[num];
    }
    render() {
        return (
            <div className={`user ${this.numberToString(this.props.number)}`}>
                {this.props.name}
            </div>
        );
    }
}

export default User;
