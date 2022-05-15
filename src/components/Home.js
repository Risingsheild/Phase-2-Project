import MovieForm from "./MovieForm"
import React, {useState} from "react"

function Home(){
    const [movies, setMovies] = useState([])
    function addMovie(newMovie) {
        setMovies([...movies, newMovie])
      }
    return (
        <div className="home">
            <h1>Lets find some movies</h1>
            <MovieForm onAddMovie={addMovie} />
        </div>
)}  
    
export default Home