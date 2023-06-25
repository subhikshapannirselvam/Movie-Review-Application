import React from 'react';
import api from './api/axiosConfig';
import {useState,useEffect} from 'react';
import Layout from './components/Layout';
import { Routes,Route } from 'react-router-dom';
import home from './components/home/Home';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/MovieDetails';
import ReviewForm from './components/reviews/MovieDetails';
import MovieDetails from './components/reviews/MovieDetails';
import WriteReview from './components/reviews/WriteReview';
import './App.css';
function App() {
  const[movies,setMovies]=useState();
  
  const getMovies=async()=>{
    try{
    const response=await api.get("/api/movies");
    console.log(response.data);
    setMovies(response.data);
    }catch(err){
      console.log(err);
    }
 
    }
  
    useEffect(() => {
      getMovies();
    },[])
  
  return (
    <div className='App'>
      <Header/>
        <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
          <Route path="/Trailer/:id" element={<Trailer/>}></Route> 
          <Route path="/Reviews/:id" element ={<MovieDetails/>}></Route>

          <Route path="/add/:id" element ={<WriteReview/>}></Route>
            

        </Route>
      </Routes> 
       
    </div>
  );
}

export default App;
