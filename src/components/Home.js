import MovieForm from "./MovieForm"
import React from "react"

function Home({onAddMovie}){
    console.log(onAddMovie);
    return (
        <div className="home">
            <h1>Lets find some movies</h1>
            <MovieForm onAddMovie={onAddMovie} />
        </div>
)}  

export default Home