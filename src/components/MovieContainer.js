import MovieCard from "./MovieCards";


function MoviContainer({movies, onDeleteMovie, onUpdateMovie}) {
    return (
        <main>
            <ul className="cards">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        year={movie.year}
                        onUpdateMovie={onUpdateMovie}
                        onDeleteMovie={onDeleteMovie}
                        />    
                ))}
            </ul>
        </main>
    )

}

export default MoviContainer