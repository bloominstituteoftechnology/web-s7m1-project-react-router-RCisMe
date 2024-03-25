import React from 'react';
import { Link } from 'react-router-dom';

export default function SavedList({ list }) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.length > 0 ? (
        <div>
          {list.map(movie => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <span className="saved-movie">{movie.title}</span>
            </Link>
          ))}
        </div>
      ) : (
        <p>No saved movies yet!</p>
      )}
      <Link to="/">Home</Link> {/* Add this link */}
    </div>
  );
}
