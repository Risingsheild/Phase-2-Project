import {Link} from "react-router-dom"
import MovieForm from "./MovieForm"
import { useState } from "react"

function Home({movieArray, setMovieArray}) {
    
    function onFormSubmit(newMovie) {
        setMovieArray([newMovie, ...movieArray])
    }

    return (
        <div>
            <Link to='/dc' exact>
                <h1 className="one">DC Movies</h1>    
            </Link>
            <Link to='/marvel' exact>
              <h1 className="two">Marvel Movies</h1>  
            </Link> 
            <Link to='/watched'>
                <h1 className="three">Watched Movies</h1>
            </Link>
            <MovieForm onFormSubmit={onFormSubmit}/>
        </div>
    )
}

export default Home