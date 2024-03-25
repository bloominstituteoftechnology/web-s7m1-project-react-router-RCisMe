import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <div className="movie-card">
            {/* Render movie information */}
          </div>
        </Link>
      ))}
    </div>
  );
}
