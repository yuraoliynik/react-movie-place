import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import {useSelector} from "react-redux";

import {Header} from "./components/header/Header";
import GenreBadges from "./components/genreBadges/GenreBadges";
import {MoviesPage} from './components/moviesPage/MoviesPage'
import {MovieInfo} from "./components/movieInfo/MovieInfo";

import './App.css';
import './css/Button.css';
import './css/Theme.css'


export default function App() {
    const currentTheme = useSelector(({settingReducer: {currentTheme}}) => currentTheme);

    return (
        <Router>
            <div className={`${currentTheme}`}>
                <Header/>

                <div>
                    <GenreBadges/>

                    <div>
                        <Route exact path={'/'} render={(props) => {
                            props.match.params.pageId = '1';
                            return <MoviesPage {...props}/>
                        }}/>

                        <Route exact path={'/genres=:genres'} render={(props) => {
                            props.match.params.pageId = '1';
                            return <MoviesPage {...props}/>
                        }}/>

                        <Route path={'/movies-page=:pageId'} component={MoviesPage}/>
                        <Route path={'/genres=:genres/movies-page=:pageId'} component={MoviesPage}/>

                        <Route path={'/movie-info=:movieId'} component={MovieInfo}/>
                    </div>
                </div>
            </div>
        </Router>
    );
}