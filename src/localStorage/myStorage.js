import LocalStorage from "./LocalStorage";


export default (new LocalStorage).create(
    'movie-place-key',
    {
        movieDetailsId: '',
        selectedGenres: [],
        currentTheme: 'theme_light'
    }
);