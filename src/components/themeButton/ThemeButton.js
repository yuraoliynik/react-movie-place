import {useDispatch, useSelector} from "react-redux";
import {actionSetCurrentTheme} from "../../redux/actions";


export function ThemeButton() {
    const currentTheme = useSelector(({settingReducer: {currentTheme}}) => currentTheme);
    const dispatch = useDispatch();

    const handleOnClick = () => {
        if (currentTheme === 'theme_light') {
            dispatch(actionSetCurrentTheme('theme_dark'));
        } else {
            dispatch(actionSetCurrentTheme('theme_light'));
        }
    };

    return (
        <div>
            <button onClick={handleOnClick}>
                {
                    currentTheme === 'theme_light' ? 'Use dark theme' : 'Use light theme'
                }
            </button>
        </div>
    );
}