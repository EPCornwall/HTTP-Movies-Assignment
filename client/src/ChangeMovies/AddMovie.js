import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

var initialMovie = {
    id: new Date(),
    title: '',
    director: '',
    metascore: '',
    stars: [],
}

function AddMovie(){
    const [movie, setMovie] = useState(initialMovie)

    const handleChange = (e) =>{
        e.persist();
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const postMovie = (e) =>{
        e.preventDefault();
        //post req here
    }

    return(
        <div>Form Here
            title
            director
            metascore
            actors []
            <form onSubmit={postMovie}>

            </form>
        </div>
    )

}

export default AddMovie