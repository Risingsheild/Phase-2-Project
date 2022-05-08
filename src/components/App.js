import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieForm from "./MovieForm";
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
        .then(movieItem => setMovies(movieItem))
      }, [])

      function addMovie(newMovie) {
        setMovies([...movies, newMovie])
      }

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
    <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/dc" element={<DC onUpdateMovie={handleAddToWatchList}  onDeleteMovie={deleteMovie}/>}/>
              <Route path="/marvel" element={<Marvel onUpdateMovie={handleAddToWatchList}  onDeleteMovie={deleteMovie}/>} />
              <Route path="/watched" element={<Watched onUpdateMovie={handleAddToWatchList}  onDeleteMovie={deleteMovie}/>}/>
          </Routes>
              <MovieForm onAddMovie={addMovie}/>

        </div>
    </BrowserRouter>
    
  );
}

export default App;
