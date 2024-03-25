import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading movie...</div>;
  }

  return (
    <div className="movie">
      {/* Render movie details */}
    </div>
  );
}
