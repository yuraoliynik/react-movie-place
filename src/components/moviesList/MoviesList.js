import {MoviesListCard} from "../moviesListCard/MoviesListCard";

import './MoviesList.css';


export function MoviesList({movies}) {
    return (
        <div className={'movies-list'}>
            {
                movies && movies.map(item => <MoviesListCard movie={item} key={item.id}/>)
            }
        </div>
    );
}