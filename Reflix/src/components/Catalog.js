import React, { Component } from "react";
import "../style/Catalog.css";
import MovieSwiper from "./MoviesSwiper";
import SearchBar from "./SearchBar";

class Catalog extends Component {
    constructor() {
        super();
        this.state = {
            textFilter: "",
        };
    }
    filterMovies = (letters) => {
        this.setState({ textFilter: letters.toUpperCase() });
    };
    getRentMovies = () => {
        return this.props.catalog
            .filter((m) =>
                m.title.toUpperCase().includes(this.state.textFilter)
            )
            .filter((m) => m.isRented === true);
    };
    getUnrentMovies = () => {
        return this.props.catalog
            .filter((m) =>
                m.title.toUpperCase().includes(this.state.textFilter)
            )
            .filter((m) => m.isRented !== true);
    };
    render() {
        const currentUser = this.props.users.find(
            (u) => u.name === this.props.match.params.name
        );
        return (
            <div id="catalog">
                <h3 className="budget">{`Budget: $${currentUser.budget}`}</h3>
                <h1 id="title-catalog">WELCOME BACK {currentUser.name}!!</h1>
                <SearchBar
                    text={this.state.textFilter}
                    setTextFilter={this.filterMovies}
                ></SearchBar>
                {this.getRentMovies().length !== 0 ? (
                    <div>
                        <hr></hr>
                        <h1 className="title">Rented:</h1>
                        <MovieSwiper
                            user={currentUser.name}
                            rentMovieFunc={this.props.rentMovieFunc}
                            movies={this.getRentMovies()}
                            key="rented-swiper"
                            updateBudgetFunc={this.props.updateBudgetFunc}
                        ></MovieSwiper>
                    </div>
                ) : null}
                {this.getUnrentMovies().length !== 0 ? (
                    <div>
                        <hr></hr>
                        <h1 className="title">Catalog:</h1>
                        <MovieSwiper
                            user={currentUser.name}
                            rentMovieFunc={this.props.rentMovieFunc}
                            movies={this.getUnrentMovies()}
                            key="unrented-swiper"
                            updateBudgetFunc={this.props.updateBudgetFunc}
                        ></MovieSwiper>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Catalog;
