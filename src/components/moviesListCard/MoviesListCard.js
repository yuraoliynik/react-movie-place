import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import foundGenresArr from "../../tools/foundGenresArr";

import {PosterPreview} from "../posterPreview/PosterPreview";
import {MovieGenres} from "../movieGenres/MovieGenres";
import {StarRating} from "../starRating/StarRating";

import './MoviesListCard.css';


export function MoviesListCard({movie}) {
    const genres = useSelector(({genreReducer: {genres}}) => genres);

    return (
        <div className={'movies-list-card'}>
            <div className={'movies-list-card_wrap'}>
                <Link to={`/movie-info=${movie.id}`}>
                    <PosterPreview posterPath={movie.poster_path} posterWidth={'200'} alt={movie.title}/>
                    <p> {movie.title} </p>

                    <div className={'movies-list-card_info'}>
                        <MovieGenres movieGenres={foundGenresArr(movie.genre_ids, genres)}/>

                        <p className={'p__description'}> Release: {movie.release_date} </p>
                    </div>
                </Link>

                <StarRating rating={movie.vote_average}/>
            </div>
        </div>
    );
}