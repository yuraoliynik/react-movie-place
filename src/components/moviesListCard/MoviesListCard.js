import {Link} from "react-router-dom";
import {StarRating} from "../starRating/StarRating";

import './MoviesListCard.css';


export function MoviesListCard({movie}) {
    return (
        <div className={'moviesListCard'}>
            <Link to={`/movie-info=${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.original_title}/>
                <h4>{movie.original_title}</h4>
            </Link>

            <StarRating rating={movie.vote_average}/>
        </div>
    );
}