import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateMovie()
{

const handleClick = (e) =>{
  e.preventDefault()
}


  return (
    <div>Update Movies here
      <form action="">
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
        <button onClick={handleClick}>Click me</button>



      </form>







    </div>
  )
}

export default UpdateMovie