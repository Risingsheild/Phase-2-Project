import MoviContainer from "./MovieContainer"

function Marvel({movies, onUpdateMovie, onDeleteMovie}) {
    const marvelMovies = movies.filter((movie) => movie.uni === "Marvel")
    return (
        <div className="marvel">
            <h2>Marvel Movies</h2>
            <ul className="cards">
                <MoviContainer 
                movies={marvelMovies} year={marvelMovies.year}
            onUpdateMovie={onUpdateMovie} onDeleteMovie={onDeleteMovie}
            />
            </ul>
        </div>
    )
}

export default Marvel