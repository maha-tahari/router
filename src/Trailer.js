import React from 'react';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { moviesData } from './MoviesData';

const Trailer = ({film}) =>
{

const {movieId}=useParams();

  return ( 
    <div>
     <button name="Home">
        <Link to="/" >
          Home
        </Link>
      </button>
      <h1>description</h1>
      <p>{moviesData.find((el) => el.id===movieId)? film.description : "aucun film n'est selectionné" }</p>
    </div> 
 )
}

export default Trailer;
