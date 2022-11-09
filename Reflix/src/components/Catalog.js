import React, { Component } from "react";
import "../style/Catalog.css";
import MovieCard from "./MovieCard";

class Catalog extends Component {
    render() {
        return (
            <div id="catalog">
                <h1 id="title-catalog">
                    WELCOME BACK {this.props.match.match.params.name}!!
                </h1>
                {this.props.catalog.map((m, i) => (
                    <MovieCard key={i} movie={m}></MovieCard>
                ))}
            </div>
        );
    }
}

export default Catalog;
