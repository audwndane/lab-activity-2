import React from "react";
import MovieList from "./MovieList";

const Row = ({ title, movies }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Row;
