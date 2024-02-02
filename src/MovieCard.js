import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <img src={movie.image} alt={movie.title} className="movieCard__image" />
    </div>
  );
};

export default MovieCard;
