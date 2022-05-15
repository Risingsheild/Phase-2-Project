import MoviContainer from "./MovieContainer";

function Watched({movies, onUpdateMovie}) {
    const displayWatchedMovies = movies
    .filter((movie) => movie.watched === true)
   

    return (
        <div className="watched">
            <h2>Your Watched Movies</h2>
            <ul className="cards">
                 <MoviContainer movies={displayWatchedMovies} onUpdateMovie={onUpdateMovie}/>
            </ul>
        </div>
        
    )
}

export default Watched