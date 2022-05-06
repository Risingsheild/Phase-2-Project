import React from "react";

function MovieCard({movie, onDeleteMovie, onUpdateMovie}) {
    
    function handleDelete () {
        fetch(` http://localhost:3000/movies/${movie.id}`, {
            method: "Delete"
        })
        .then((r) => r.json())
        .then(movie => onDeleteMovie(movie))
    }

    function handleWatchedClick () {
        let isWatched;
        movie.watched ? isWatched = false : isWatched = true;

        fetch(` http://localhost:3000/movies/${movie.id}`, {
            method: "PATCH",
            headers: {"Content-Type" : "application/json",}, 
            body: JSON.stringify(
                {"watched" : isWatched}
            )
        })
        .then((r) => r.json())
        .then(updateMovie => onUpdateMovie(updateMovie))
    }

    return (
        <li className="card">
            <h4>{movie.title}</h4>
            <img src={movie.image} alt={movie.title} />
            {!movie.watched ?
                <button className="notWatched" onClick={handleWatchedClick}>Mark as Watched</button>
                    : <button onClick={handleWatchClick}>You've seen this One!</button>}
            <button className="delete" onClick={handleDelete}> Delete </button>
        </li>
    )

}

export default MovieCard