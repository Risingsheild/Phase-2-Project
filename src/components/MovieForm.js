import React, {useState} from "react";

function MovieForm ({onFormSubmit}) {
    const [formData, setFormData] = useState ({
        title: "",
        date: "",
        image: "",
        uni: "",
        completed: false
    })
    

}

export default MovieForm