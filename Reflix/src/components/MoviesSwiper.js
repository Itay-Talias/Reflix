import React, { Component } from "react";
import "../style/Catalog.css";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";

class MovieSwiper extends Component {
    render() {
        const rentMovieFunc = this.props.rentMovieFunc;
        const user = this.props.user;
        return (
            <Swiper slidesPerView={7}>
                {this.props.movies.map((m, i) => (
                    <SwiperSlide>
                        <Link to={`/catalog/${user}/${i}`}>
                            <MovieCard
                                rentMovieFunc={rentMovieFunc}
                                key={i}
                                movie={m}
                            ></MovieCard>{" "}
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
}

export default MovieSwiper;
