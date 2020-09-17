import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'

function UpdateMovie(props){
    const params = useParams();
    const history= useHistory()

    var initialMovie = {
        id: params.id,
        title: '',
        director: '',
        metascore: '',
        stars: [],
    }

    const [movie, setMovie] = useState(initialMovie)

    const fetchMovie = (id) => {
        axios
          .get(`http://localhost:5000/api/movies/${id}`)
          .then((res) => setMovie(res.data))
          .catch((err) => console.log(err.response));
      };

      useEffect(() => {
        fetchMovie(params.id);
      },[params.id]);

      const handleChange = (e) =>{
          e.persist();
          setMovie({
              ...movie,
              [e.target.name]: e.target.value
          })
      }

      const putMovie = (e) =>{
          e.preventDefault()
          axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
          .then((res) =>{
            setMovie(initialMovie)
            history.push('/')
          })
          .catch((err) =>{
              console.log(err)
          })
      }
        // console.log(movie)
        return(
            <div>Form here
                <form onSubmit={putMovie}>
                    <label>
                        Title
                        <input
                        name="title"
                        type="text"
                        value={movie.title}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Director
                        <input
                        name="director"
                        type="text"
                        value={movie.director}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Metascore
                        <input
                        name="metascore"
                        type="text"
                        placeholder="metascore"
                        value={movie.metascore}
                        onChange={handleChange}
                        />
                    </label>
                    <button>Update</button>
                </form>
            </div>
        )
}

export default UpdateMovie