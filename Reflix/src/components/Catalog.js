import React, { Component } from "react";
import "../style/Catalog.css";
import MovieCard from "./MovieCard";

class Catalog extends Component {
    render() {
        return (
            <div id="catalog">
                {this.props.catalog.map((m, i) => (
                    <MovieCard key={i} movie={m}></MovieCard>
                ))}
            </div>
        );
    }
}

export default Catalog;
