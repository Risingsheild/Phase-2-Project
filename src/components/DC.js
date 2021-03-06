import MoviContainer from "./MovieContainer"
// filters out each movie thats DC 
function DC({movies, onUpdateMovie, onDeleteMovie}) {
    const dcMovies = movies.filter((movie) => movie.uni === "DC")
    return (
        <div className="dc">
            <h2>DC movies</h2>
            <ul className="cards">
             <MoviContainer 
            movies={dcMovies} year={dcMovies.year}
            onUpdateMovie={onUpdateMovie} onDeleteMovie={onDeleteMovie}
            />
            </ul>
        </div>
    )
}

export default DC