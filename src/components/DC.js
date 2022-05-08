import MoviContainer from "./MovieContainer"

function DC({movies, onUpdateMovie, onDeleteMovie}) {
    const dcMovies = movies.filter((movie) => movie.uni === "DC")
        .map((movie) => (
            <MoviContainer 
            key={movie.id} movie={movie} 
            onUpdateMovie={onUpdateMovie} onDeleteMovie={onDeleteMovie}
            />
        ))
    return (
        <div className="marvel">
            <ul className="cards">
                {dcMovies}
            </ul>
        </div>
    )
}

export default DC