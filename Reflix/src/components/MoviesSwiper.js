import React, { Component } from "react";
import "../style/Catalog.css";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

class MovieSwiper extends Component {
    render() {
        const rentMovieFunc = this.props.rentMovieFunc;
        return (
            <Swiper slidesPerView={7}>
                {this.props.movies.map((m, i) => (
                    <SwiperSlide>
                        <MovieCard
                            rentMovieFunc={rentMovieFunc}
                            key={i}
                            movie={m}
                        ></MovieCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
}

export default MovieSwiper;
