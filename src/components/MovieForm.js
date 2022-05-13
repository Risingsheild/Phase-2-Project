
import React, {useState} from "react";

function MovieForm ({onAddMovie}) {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [img, setImg] = useState("")
    const [uni, setUni] = useState("")

    function handleOnChangeTitle(e) {
        setTitle(e.target.value)
    }
    
    function handleOnChangeDate(e) {
        setDate(e.target.value)
    }

    function handleOnChangeImg(e) {
        setImg(e.target.value)
    }
     
    function handleOnChangeUni(e) {
        setUni(e.target.value)
    }
    

    function handleSubmitForm(e) {
        e.preventDefault();
         const movieItem = {
             title: title,
             date: date,
             "movie-image": "http://www.clipartbest.com/cliparts/dT7/GxM/dT7GxMXT9.jpeg",
             uni: uni,
             watched: false,
         }

         fetch("http://localhost:3000/movies", {
             method: "POST",
             headers: {"Content-type": "application/json",},
             body: JSON.stringify(movieItem)
         })
         .then((r) => r.json())
         .then((data) => onAddMovie(data))
    }
return (
    <div className="newMovie">
           <h2>Add Movies Here</h2>
    <form onSubmit={handleSubmitForm}>
        <label>
            Movie Title:
                <input 
                    type="text"
                    name="title"
                    placeholder="Enter Movie Title ..."
                    value={title}
                    onChange={handleOnChangeTitle}
                />
        </label> <br/>
        <label>
            Release Date:
                <input
                    type="text"
                    name="date"
                    placeholder="YYYY"
                    value={date}
                    onChange={handleOnChangeDate}
                />
        </label> <br/>
        <label>
            Movie Image:
                <input 
                    type="text"
                    name="image"
                    placeholder="Insert Movie Img URL..."
                    value={img}
                    onChange={handleOnChangeImg}
                />
        </label> <br/>
        <label>
            Universe
                <select
                    name="universe"
                    value={uni}
                    onChange={handleOnChangeUni}
                >
                    <option value="dc">DC</option>
                    <option value="marvel">Marvel</option>
                </select>
        </label> <br/>
        <button type="submit">Add Movie</button>
    </form>
</div>
)} 
    

export default MovieForm