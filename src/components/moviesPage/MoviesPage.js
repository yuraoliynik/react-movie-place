import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";

import {loadMoviesPage} from "../../services/movie.service";

import {MoviesList} from "../moviesList/MoviesList";
import {Pagination} from "../pagination/Pagination";

import './MoviesPage.css';


export function MoviesPage(props) {
    const {match: {params: {genres, pageId}}} = props;

    const {page, results, total_pages} = useSelector(({movieReducer: {moviesPage}}) => moviesPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMoviesPage(pageId, genres));
    }, [genres, pageId]);

    return (
        <div className={'movies-page'}>
            <MoviesList movies={results}/>

            <Pagination page={page} totalPages={total_pages}/>
        </div>
    );
}