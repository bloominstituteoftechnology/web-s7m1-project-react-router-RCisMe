import React from 'react';

function MovieCard({ movie, addToSavedList }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <div className="movie-director">
        Director: <em>{movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{movie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}

      <button onClick={() => addToSavedList(movie)}>Save</button>
    </div>
  );
}

export default MovieCard;
