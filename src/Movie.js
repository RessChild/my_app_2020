import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img> 
            <div className="movie_data">
                <h3 className="movie_title">{ title }</h3>
                <h5 className="movie_year">{ year }</h5>
                <p className="movie_summary">{ summary.slice(0,140) }...</p>
                <ul className="movie_genres">
                    {genres.map((genre, idx) => (
                        <li key={ idx } className="genres_genre"> 
                                { genre }
                        </li>
                    ))}
                </ul>
            </div>
        </div>);
}
// list 는 고유의 키 번호값을 요구
// map 함수의 경우, item number 라는 값을 추가로 제공해줌
// 이를 idx 라는 이름으로 받아와 사용

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;