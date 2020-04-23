import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { Route } from "react-router-dom";


const initialState = {


  title: '',
  director: '',
  metascore: 0,
  stars: [],

}


function UpdateMovie(props)
{


  const { push } = useHistory()
  const [item, setItem] = useState(initialState)
  const { id } = useParams()

  useEffect(() =>
  {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res =>
      {
        console.log("Response", res)
        setItem(res.data)
      })
  }
    , [])


  const handleClick = (e) =>
  {
    e.preventDefault()
    // put request goes here
    axios
      .put(`http://localhost:5000/api/movies/${id}`, item)
      .then(res =>
      {
        props.setItems(res.data)
        push(`/item-list/${id}`)
      })
  }

  const changeHandler = e =>
  {

    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div>Update Movie here
      <form onSUbmit={handleClick}>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="title" placeholder="movie name"
            onChange={changeHandler}
            value={item.title}
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="director" placeholder="Director"
            onChange={changeHandler}
            value={item.director}
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="metascore" placeholder="MetaScore"
            onChange={changeHandler}
            value={item.metascore}
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="stars" placeholder="Actor 1"
            onChange={changeHandler}
            value={item.stars}
          />
        </div>

        <button onClick={handleClick}>Submit</button>


      </form>







    </div>
  )
}

export default UpdateMovie