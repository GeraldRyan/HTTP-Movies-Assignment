import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { Route } from "react-router-dom";

function UpdateMovie()
{
const initialState = {

    id: 5,
    title: 'Tombstone',
    director: 'George P. Cosmatos',
    metascore: 89,
    stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],

}

const {push} = useHistory()


const handleClick = (e) =>{
  e.preventDefault()
}


  return (
    <div>Update Movies here
      <form onSUbmit={handleClick}>
        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
        <Route to="/host">
        <button onClick={() => push(`/update-movie/${initialState.id}`)}>Edit</button>
        </Route>


      </form>







    </div>
  )
}

export default UpdateMovie