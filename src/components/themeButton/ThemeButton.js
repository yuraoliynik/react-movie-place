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

    const buttonName = () => {
        if (currentTheme === 'theme_light') {
            document.body.style = {background: '#FCFCFC'};
        } else {
            document.body.style.background = 'rgba(2, 48, 60, 0.8)';
        }

        return currentTheme === 'theme_light' ? 'Use dark theme' : 'Use light theme';
    };

    return (
        <div>
            <button onClick={handleOnClick}>
                {
                    buttonName()
                }
            </button>
        </div>
    );
}