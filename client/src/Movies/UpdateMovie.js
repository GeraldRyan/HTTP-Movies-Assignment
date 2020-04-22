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

  const handleClick = (e) =>
  {
    e.preventDefault()
    // put request goes here
    axios
      .put(`http://localhost:3333/items/${id}`, item)
      .then(res =>
      {
        props.setItems(res.data)
        push(`/item-list/${id}`)
      })
  }

  const changeHandler = ev =>
  {
    ev.persist()
    let value = ev.target.value
    setItem({
      ...item,
      [ev.target.name]: value
    })
  }




  return (
    <div>Update Movie here
      <form onSUbmit={handleClick}>
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="movie name"
            onChange={changeHandler}
            value={item.title}
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="Director"
            onChange={changeHandler}
            value={item.director}
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="MetaScore"
            onChange={changeHandler}
            value={item.metascore}
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="Actor 1"
            onChange={changeHandler}
            value={item.stars[0]}
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="Actor 2"
            onChange={changeHandler}
            value={item.stars[1]}
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="Actor 3"
            onChange={changeHandler}
            value={item.stars[2]}
          />
        </div>
        <button onClick={handleClick}>Submit</button>


      </form>







    </div>
  )
}

export default UpdateMovie