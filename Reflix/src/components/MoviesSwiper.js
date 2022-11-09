import React, { Component } from "react";
import "../style/Catalog.css";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

class MovieSwiper extends Component {
    render() {
        return (
            <Swiper slidesPerView={7}>
                {this.props.movies.map((m, i) => (
                    <SwiperSlide>
                        <MovieCard key={i} movie={m}></MovieCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
}

export default MovieSwiper;
