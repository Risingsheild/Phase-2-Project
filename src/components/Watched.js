import MoviContainer from "./MovieContainer";

function Watched({movies, onUpdateMovie}) {
    const displayWatchedMovies = movies
    .filter((movie) => movie.watched === true)
   

    return (
        <div className="watched">
            <ul className="cards">
                 <MoviContainer movies={displayWatchedMovies} onUpdateMovie={onUpdateMovie}/>
            </ul>
        </div>
        
    )
}

export default Watched