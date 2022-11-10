import React, { Component } from "react";
import MovieCard from "./MovieCard";

class MovieInfo extends Component {
    findMovie = () => {
        const movieId = this.props.match.params.id;
        const movie = this.props.catalog.find((m) => m.id == movieId);
        return movie;
    };
    render() {
        const rentMovieFunc = this.props.rentMovieFunc;
        const movie = this.findMovie();
        return (
            <MovieCard
                rentMovieFunc={rentMovieFunc}
                key={movie.id}
                movie={movie}
            ></MovieCard>
        );
    }
}

export default MovieInfo;
