import React, { Component } from "react";
import "../style/Catalog.css";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

class MovieSwiper extends Component {
    render() {
        const rentMovieFunc = this.props.rentMovieFunc;
        const user = this.props.user;
        return (
            <Swiper slidesPerView={7}>
                {this.props.movies.map((m) => (
                    <SwiperSlide key={m.id}>
                        <MovieCard
                            rentMovieFunc={rentMovieFunc}
                            key={m.id}
                            movie={m}
                            user={user}
                            updateBudgetFunc={this.props.updateBudgetFunc}
                        ></MovieCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
}

export default MovieSwiper;
