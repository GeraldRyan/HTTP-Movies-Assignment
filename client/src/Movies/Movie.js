import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";
import UpdateMovie from './UpdateMovie'

function Movie(props)
{
  const [movie, setMovie] = useState(null);
  const params = useParams();

  const { push } = useHistory()

  const fetchMovie = (id) =>
  {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () =>
  {
    props.addToSavedList(movie);
  };

  const deleteItem = (e) =>
  {
    e.preventDefault()
    console.log("params id", params.id) // this is working so that's not where the error is

    axios
    .delete(`http://localhost:5000/api/movies/${params.id}`)
      .then(res => {
        console.log("delete response", res)
      push('/movies')
      props.setRerender(props.rerender+1)
      })
      
  }

  useEffect(() =>
  {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie)
  {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <button onClick={() => push(`/update-movie/${movie.id}`)}>Edit</button>
      <button onClick={deleteItem}>Delete</button>
      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
    </div>
  );
}

export default Movie;
