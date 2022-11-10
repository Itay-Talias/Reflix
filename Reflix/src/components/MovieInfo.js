import React, { Component } from "react";
import "../style/MovieInfo.css";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

class MovieInfo extends Component {
    findMovie = () => {
        const movieId = this.props.match.params.id;
        const movie = this.props.catalog.find((m) => m.id == movieId);
        return movie;
    };
    render() {
        const movie = this.findMovie();
        return (
            <div className="movie-info">
                <p className="desc-info">{movie.descrShort}</p>
                <img className="img-info" src={movie.img} alt="movie-img"></img>
                <h2 className="text-info">{movie.title}</h2>
                <h3 className="text-info">{movie.year}</h3>
            </div>
        );
    }
}

export default MovieInfo;
