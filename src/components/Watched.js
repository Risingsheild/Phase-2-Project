import MoviContainer from "./MovieContainer";

function Watched({movies, onUpdateMovie, onDeleteMovie}) {
    const displayWatchedMovies = movies
    .filter((movie) => movie.watched === true)
   

    return (
        <div className="watched">
            <h2>Your Watched Movies</h2>
            <ul className="cards">
                 <MoviContainer movies={displayWatchedMovies} year={displayWatchedMovies.year} onUpdateMovie={onUpdateMovie} onDeleteMovie={onDeleteMovie}/>
            </ul>
        </div>
        
    )
}

export default Watched