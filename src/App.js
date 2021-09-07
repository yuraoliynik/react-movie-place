import './App.css';

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import {Header} from "./components/header/Header";
import GenreBadges from "./components/genreBadges/GenreBadges";
import {MoviesPage} from './components/moviesPage/MoviesPage'
import {MovieInfo} from "./components/movieInfo/MovieInfo";


export default function App() {
    return (
        <Router>
            <Header/>

            <div className={'wrap'}>
                <div>
                    <GenreBadges/>
                </div>

                <div>
                    <Route exact path={'/'} render={(props) => {
                        props.match.params.pageId = '1';
                        return <MoviesPage {...props}/>
                    }}/>

                    <Route path={'/genres=:genres'} render={(props) => {
                        props.match.params.pageId = '1';
                        return <MoviesPage {...props}/>
                    }}/>

                    <Route path={'/movies-page=:pageId'} component={MoviesPage}/>
                    <Route path={'/genres=:genres/movies-page=:pageId'} component={MoviesPage}/>

                    <Route path={'/movie-info=:movieId'} component={MovieInfo}/>
                </div>
            </div>
        </Router>
    );
}