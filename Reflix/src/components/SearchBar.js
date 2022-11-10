import React, { Component } from "react";
import "../style/SearchBar.css";

class SearchBar extends Component {
    inputHadler = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    render() {
        return (
            <input
                placeholder="FILTER BY NAME..."
                className="text-input"
                onChange={this.inputHadler}
                value={this.props.text}
            ></input>
        );
    }
}

export default SearchBar;
