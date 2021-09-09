import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {loadMovieDetails} from "../../services/movie.service";
import {PosterPreview} from "../posterPreview/PosterPreview";
import {MovieGenres} from "../movieGenres/MovieGenres";

import {StarRating} from "../starRating/StarRating";

import './MovieInfo.css';


export function MovieInfo({match: {params: {movieId}}}) {
    const movieDetails = useSelector(({movieReducer: {movieDetails}}) => movieDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMovieDetails(movieId));
    }, [movieId]);

    const {
        title,
        poster_path,
        overview,
        genres,
        production_companies,
        production_countries,
        budget,
        release_date,
        homepage,
        vote_average
    } = movieDetails;

    return (
        <div className={'movie-info'}>
            <div>
                <PosterPreview posterPath={poster_path} posterWidth={'400'} alt={title}/>
            </div>

            <div className={'movie-info_description'}>
                <h2> {title} </h2>

                <StarRating rating={vote_average}/>

                <p className={'p__property'}> Genres: </p> <MovieGenres movieGenres={genres}/>

                <p className={'p__property'}> Overview: </p>
                <div>
                    <p className={'p__description'}> {overview} </p>
                </div>

                <p className={'p__property'}> Production companies: </p>
                <div>
                    {
                        production_companies && production_companies.map((item, index) => {
                            return <p className={'p__description'} key={index}> {item.name} </p>
                        })

                    }
                </div>


                <p className={'p__property'}> Production countries: </p>
                <div>
                    {
                        production_countries && production_countries.map((item, index) => {
                            return <p className={'p__description'} key={index}> {item.name} </p>
                        })

                    }
                </div>

                <p className={'p__property'}> Budget: </p>
                <div>
                    <p className={'p__description'}> {budget} </p>
                </div>

                <p className={'p__property'}> Release_date: </p>
                <div>
                    <p className={'p__description'}> {release_date} </p>
                </div>

                <p className={'p__property'}> Home page:< /p>
                <div>
                    <a className={'p__description'} href={homepage}> {homepage} </a>
                </div>
            </div>
        </div>
    );
}