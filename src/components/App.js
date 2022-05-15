import React, {useState, useEffect} from "react";
import {Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import DC from "./DC";
import Marvel from "./Marvel";
import Watched from "./Watched";
import "./style.css";


function App() {
    const [movies, setMovies] = useState([])

    useEffect(()=> {
      fetch("http://localhost:3000/movies")
        .then((r) => r.json())
        .then(data  => setMovies(data))
      }, [])

      function deleteMovie(deletedMovie) {
        const newMovieList = movies.filter((movie) => movie.id !== deletedMovie.id)
          setMovies(newMovieList)
      }

      function handleAddToWatchList(currentMovie){
          const newMovieList = movies.map((movie) => 
              movie.id === currentMovie.id ? {...movie, watched: true} : movie)
                setMovies(newMovieList)
      } 

  return (
        <div>
          <NavBar />
          <Routes>
              <Route  path="/" element={<Home />}/> 
              <Route path="/dc" element={<DC movies={movies} onUpdateMovie={handleAddToWatchList}  onDeleteMovie={deleteMovie} />}/>
              <Route  path="/marvel" element={<Marvel movies={movies} onUpdateMovie={handleAddToWatchList}  onDeleteMovie={deleteMovie}/>} />
              <Route  path="/watched" element={<Watched movies={movies} onUpdateMovie={handleAddToWatchList}  onDeleteMovie={deleteMovie}/>}/>
          </Routes>
        </div>
  );
}

export default App;
