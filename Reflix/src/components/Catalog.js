import React, { Component } from "react";
import "../style/Catalog.css";
import MovieSwiper from "./MoviesSwiper";

class Catalog extends Component {
    getRentMovies = () => {
        return this.props.catalog.filter((m) => m.isRented === true);
    };
    getUnrentMovies = () => {
        return this.props.catalog.filter((m) => m.isRented !== true);
    };
    render() {
        return (
            <div id="catalog">
                <h1 id="title-catalog">
                    WELCOME BACK {this.props.match.match.params.name}!!
                </h1>
                {this.getRentMovies().length !== 0 ? (
                    <div>
                        <hr></hr>
                        <h1 className="title">Rented:</h1>
                        <MovieSwiper
                            rentMovieFunc={this.props.rentMovieFunc}
                            movies={this.getRentMovies()}
                        ></MovieSwiper>
                    </div>
                ) : null}
                {this.getUnrentMovies().length !== 0 ? (
                    <div>
                        <hr></hr>
                        <h1 className="title">Catalog:</h1>
                        <MovieSwiper
                            rentMovieFunc={this.props.rentMovieFunc}
                            movies={this.getUnrentMovies()}
                        ></MovieSwiper>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Catalog;
