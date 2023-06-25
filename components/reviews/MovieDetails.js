import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'H:/MovieApp/moviereviewapp/src/api/axiosConfig.js';
import { Link } from 'react-router-dom';
import './rev.css';
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const url=`http://localhost:8080/api/movies/${id}`
  const getMovies=async()=>{
   try{
    const response = await fetch(url); // Replace with your actual API endpoint
    if (response.ok) {
      const movieData = await response.json();
      setMovie(movieData);
    } else {
      console.error('Error fetching movie details:', response.status);
    }
  } catch (error) {
    console.error('Error fetching movie details:', error);
  } finally {
    setLoading(false);
  }
};


  
    useEffect(() => {
      getMovies();
    },[])

 


    return (
      
      
      <div className='form' >
        <div className='revposter'>
        <img src={movie.poster} alt=''/>
        </div>
        
        <h3>{movie.title}</h3>
            <p>ImdbId: {movie.imdbId}</p>
            <p>Released on: {movie.releaseDate}</p>
        

        
        
        {loading ? (
          <p>Loading movie details...</p>
        ) : movie ? (
          <div>Genres 
           <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      Reviews
      {movie.reviews.length === 0 ? (
        <p>No reviews Yet.</p>
      ) : (
        <ul>
          {movie.reviews.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </ul>
          
      
      )}
      
      <div className="movie-review-button-container" type="submit">
                                            <Link to={`/add/${movie.id}`}>
                                            <button >WriteReview</button>
                                    
                                                </Link></div>

            
          </div>
        ) : (
          <p>No movie details available</p>
        )}
      </div>
      
    );
  };

export default MovieDetails;
