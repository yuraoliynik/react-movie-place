import './PosterPreview.css';


export function PosterPreview({posterPath = '', posterWidth = 500, alt = 'poster'}) {
    return (
        <div className={`poster-preview`}>
            <img src={`https://image.tmdb.org/t/p/w${posterWidth}${posterPath}`} alt={alt}/>
        </div>
    );
}