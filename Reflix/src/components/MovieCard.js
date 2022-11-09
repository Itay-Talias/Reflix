import React, { Component } from "react";
import "../style/MovieCard.css";

class MovieCard extends Component {
    render() {
        return (
            <div className="movie-card">
                <img
                    className="img-card"
                    src={this.props.movie.img}
                    alt="movie-img"
                ></img>
                <div class="text-card">
                    <h4>{this.props.movie.title}</h4>
                    <p>{this.props.movie.year}</p>
                </div>
            </div>
        );
    }
}

export default MovieCard;
