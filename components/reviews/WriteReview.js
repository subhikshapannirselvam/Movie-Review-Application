import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './rev.css'

const WriteReview = () => {
    const{id}=useParams();
    const url=`http://localhost:8080/api/movies/add?Id=${id}`
      const [responseText, setResponseText] = useState('');
      const [inputText, setInputText] = useState('');
      const [error, setError] = useState('');
      const [displayText, setDisplayText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
    
      const handleInputChange = (e) => {
        setInputText(e.target.value);
        
        
      };
    
      const handlePostText = async (e) => {
        e.preventDefault();
        setDisplayText('Thank you for posting!');
    setIsSubmitted(true);
    
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: inputText
          });
          console.log('Response:', response); 
    
          if (response.ok) {
            const text = await response.text();
            setResponseText(text);
          } else {
            console.error('Failed to post text:', response.status);
          }
        } catch (error) {
          console.error('An error occurred while posting text:', error);
        }
      };
    
      return (
        <div className='form'>
          <h2>Post Your comment</h2>
          <form onSubmit={handlePostText}>
            <input type="text" value={inputText} onChange={handleInputChange} />
            <button type="submit">Post Text</button>
          </form>
          {error && <div>Error: {error}</div>}
          <div>
          {isSubmitted && <p>{displayText}</p>}
          </div>
        </div>
      );
    };
    
    
    

export default WriteReview;
