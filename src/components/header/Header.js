import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {actionClearSelectedGenres} from "../../redux/actions";

import {ThemeButton} from "../themeButton/ThemeButton";
import {UserInfo} from "../userInfo/UserInfo";

import './Header.css';


export function Header() {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(actionClearSelectedGenres());
    }

    return (
        <div className={'header'}>
            <div className={'header_wrap block__style'}>
                <Link to={'/'} onClick={handleOnClick}> Movie Place </Link>

                <div className={'header_block'}>
                    <UserInfo/>

                    <ThemeButton/>
                </div>
            </div>
        </div>
    );
}