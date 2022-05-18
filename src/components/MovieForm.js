
import React, {useState} from "react";

function MovieForm ({onAddMovie}) {
    const defaultImage = "http://www.clipartbest.com/cliparts/dT7/GxM/dT7GxMXT9.jpeg"
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
             image: defaultImage,
             uni: uni,
             watched: false,
         }

         fetch("http://localhost:3000/movies", {
             method: "POST",
             headers: {"Content-type": "application/json",
                    "Accept": "application/json",},
             body: JSON.stringify(movieItem)
         })
         .then((r) => r.json())
         .then((data) =>  onAddMovie(data))
         
    }
return (
    <div className="newMovie">
           <h2>Add Movies Here</h2>
    <form onSubmit={handleSubmitForm}>
        <label>Movie Title:</label>
            
                <input className="input"
                    type="text"
                    name="title"
                    placeholder="Enter Movie Title ..."
                    value={title}
                    onChange={handleOnChangeTitle}
                />
         <br/>
        <label> Release Date:</label> 
                <input className="input"
                    type="text"
                    name="date"
                    placeholder="YYYY"
                    value={date}
                    onChange={handleOnChangeDate}
                />
        <br/>
        <label> Movie Image: </label> 
                <input className="input"
                    type="text"
                    name="image"
                    placeholder="Insert Movie Img URL..."
                    value={img}
                    onChange={handleOnChangeImg}
                />
        <br/>
        <label> Universe </label>
                <select
                    name="uni"
                    onChange={handleOnChangeUni}
                    id="select1"
                >
                    <option value="Select">Select</option>
                    <option value="DC">DC</option>
                    <option value="Marvel">Marvel</option>
                </select>
        <br/>
        <button type="submit">Add Movie</button>
    </form>
</div>
)} 
    

export default MovieForm