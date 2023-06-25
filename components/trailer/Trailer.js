import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';
const Trailer = () => {
    const{id} = useParams();
    console.log(id);
    let youtubeLink = `https://www.youtube.com/watch?v=${id}`;
   
  return (

    <div className="player-comp">
     <ReactPlayer url={youtubeLink} controls={true} playing={true} width="100%" height="1000px"/>
                                    
    </div>
    )}
 


export default Trailer