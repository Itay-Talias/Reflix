import React, { Component } from "react";
import "../style/MovieCard.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import "reactjs-popup/dist/index.css";

const RENR_PRICE = 300;
const UNRENR_PRICE = -300;

class MovieCard extends Component {
    rentMovie = () => {
        this.props.rentMovieFunc(this.props.movie.id);
        const price = this.props.movie.isRented ? UNRENR_PRICE : RENR_PRICE;
        this.props.updateBudgetFunc(this.props.user, price);
    };
    render() {
        return (
            <div className="movie-card">
                <Link to={`/catalog/${this.props.user}/${this.props.movie.id}`}>
                    <img
                        className="img-card"
                        src={this.props.movie.img}
                        alt="movie-img"
                    ></img>
                </Link>
                <div className="icon-card" onClick={this.rentMovie}>
                    {this.props.movie.isRented ? (
                        <AiOutlineMinusCircle />
                    ) : (
                        <AiOutlinePlusCircle />
                    )}
                </div>
                <div className="text-card">
                    <h4>{this.props.movie.title}</h4>
                    <h6>{this.props.movie.year}</h6>
                </div>
                <Popup trigger={<button> Info</button>}>
                    <div>{this.props.movie.descrShort}</div>
                </Popup>
            </div>
        );
    }
}

export default MovieCard;
