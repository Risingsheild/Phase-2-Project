import MoviContainer from "./MovieContainer"

function Marvel({movies, onUpdateMovie, onDeleteMovie}) {
    const marvelMovies = movies.filter((movie) => movie.uni === "Marvel")
        .map((movie) => (
            <MoviContainer 
            key={movie.id} movie={movie} 
            onUpdateMovie={onUpdateMovie} onDeleteMovie={onDeleteMovie}
            />
        ))
    return (
        <div className="marvel">
            <ul className="cards">
                {marvelMovies}
            </ul>
        </div>
    )
}

export default Marvel