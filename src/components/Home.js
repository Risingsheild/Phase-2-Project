import MovieForm from "./MovieForm"
import React from "react"

function Home({addMovie}){
    return (
        <div className="home">
            <h1>Lets find some movies</h1>
            <MovieForm onAddMovie={addMovie} />
        </div>
)}  
    
export default Home