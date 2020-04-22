import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { Route } from "react-router-dom";

function UpdateMovie(props)
{
  const initialState = {

    id: 5,
    title: 'Tombstone',
    director: 'George P. Cosmatos',
    metascore: 89,
    stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],

  }

  const { push } = useHistory()
  const [item, setItem] = useState(initialState)
  const { id } = useParams

  useEffect(() =>
  {
    axios.get(`http://localhost:5000/api/movies/${id}`)
      .then(res =>
      {
        console.log(res)
        setItem(res.data)
      })
  }, [id])


  const handleClick = (e) =>
  {
    e.preventDefault()
  }


  return (
    <div>Update Movie here
      <form onSUbmit={handleClick}>
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="movie name" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="Director" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="MetaScore" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="Actor 1" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="Actor 2" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="Actor 3" />
        </div>



      </form>







    </div>
  )
}

export default UpdateMovie