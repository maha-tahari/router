import React from "react";
import Rate from "../../Rate";
import "./MovieCard.css";
import { Link } from "react-router-dom";



const MovieCard = ({movie}) => {
  return (
    <div className="card">
      <div className="card_left">
        <img src={movie.image} alt="poster" />
      </div>
      <div className="card_right">
        <h1>{movie.name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{movie.date}</li>
            <li>||</li>
            <li>{movie.type}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate rating={movie.rating} />
        </div>
        <div className="card_right__review">
          <h1>Read More</h1>
          <p>{movie.description}</p>
          <Link to={`/trailer/${movie.id}`}>Read More</Link>
        </div>
        <div className="card_right__button">
        <button>
          <Link to={`/trailer/${movie.id}`}>WATCH TRAILER</Link>
        </button>
        </div>
      </div>
     
    </div>
  );
};

export default MovieCard;
