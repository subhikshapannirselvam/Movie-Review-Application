import React from 'react'
import './Display.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Trailer from '../trailer/Trailer';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
const Display=({movies})=> {
    const navigate=useNavigate();
    function reviews(movieId){
        navigate('Reviews/${movieId}');
    }

  return (

    <div className="movie-carousel-container">
        <Carousel>
        {
            movies?.map((m) =>{

                return(
                    <Paper key={m.id}>
                    
                        <div className='container'>
                            <div className='card'>
                            <img src={m.backdrops[1]} alt=''/>
                                <div className='detail'>
                                    <div className='poster'>
                                        <img src={m.poster} alt=''/>
                                    </div>
                                    <div className='title'>
                                        <h1>{m.title}</h1>
                                     
                                    </div>
                                    <div className="movie-buttons-container">
                                    <Link to={`/Trailer/${m.trailerLink.substring(m.trailerLink.length - 11)}`}>
                                         
                                           <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link> 
                                        

                                            <div className="movie-review-button-container" type="submit">
                                            <Link to={`/Reviews/${m.imdbId}`}>
                                            <button >About</button>
                                    
                                                </Link></div>
                                    
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        </Paper>
                        

                )
            })
         } 
      </Carousel>
    </div>
  )
}

export default Display
