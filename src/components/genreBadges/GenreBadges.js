import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {withRouter} from "react-router";

import {loadGenres} from "../../services/movie.service";
import {actionAddSelectedGenre, actionDeleteSelectedGenre, actionSetGenres_URL} from "../../redux/actions";
import {checkStateBadge} from "../../tools";

import {Badge} from "./badge/Badge";

import './GenreBadges.css';


function GenreBadges({history}) {
    const genres = useSelector(({genreReducer: {genres}}) => genres);
    const selectedGenres = useSelector(({settingReducer: {selectedGenres}}) => selectedGenres);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGenres());
    }, []);

    useEffect(() => {
        if (selectedGenres.length !== 0) {
            history.push(`/genres=${selectedGenres.join(',')}`);
            dispatch(actionSetGenres_URL(history.location.pathname));
        } else {
            history.push(`/`);
            dispatch(actionSetGenres_URL(''));
        }
    }, [selectedGenres]);

    const onClickBadge = (badgeId) => {
        if (!checkStateBadge(badgeId, selectedGenres)) {
            dispatch(actionAddSelectedGenre(badgeId));
        } else {
            dispatch(actionDeleteSelectedGenre(badgeId));
        }
    };

    const stateBadge = (badgeId) => {
        return checkStateBadge(badgeId, selectedGenres) ? 'badge_selected' : 'badge_unSelected';
    };

    return (
        <div className={'genre-badge'}>
            <div className={'genre-badge_wrap block__style'}>
                {
                    genres.map(item => <Badge
                        badgeItem={item}
                        key={item.id}
                        onClickBadge={onClickBadge}
                        stateBadge={stateBadge}
                    />)
                }
            </div>
        </div>
    );
}


export default withRouter(GenreBadges);