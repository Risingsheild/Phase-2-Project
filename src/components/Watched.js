import MoviContainer from "./MovieContainer";

function Watched({movies, onUpdateMovie}) {
    const displayWatchedMovies = movies
    .filter((movie) => movie.watched === true)
    .map((movie) => <MoviContainer key={movie.id} movie={movie} onUpdateMovie={onUpdateMovie}/>)

    return (
        <div className="watched">
            <ul className="cards">
                {displayWatchedMovies}
            </ul>
        </div>
        
    )
}

export default Watched