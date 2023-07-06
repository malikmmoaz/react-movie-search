import React from "react";

function MovieCard({ movies }) {
  return (
    <div className="card w-96 m-6 bg-base-100 shadow-xl">
      <figure>
        <img
          src={
            movies?.Poster !== "N/A"
              ? movies?.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movies?.Title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {movies?.Title} ({movies?.Year})
        </h2>
        <p></p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{movies?.Type}</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
