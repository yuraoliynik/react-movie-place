import './MovieGenres.css';


export function MovieGenres({movieGenres}) {
    return (
        <div className={'movie-genres'}>
            {
                movieGenres && movieGenres.map(item => <p className={'p__description'} key={item.id}> {item.name} </p>)
            }
        </div>
    );
}