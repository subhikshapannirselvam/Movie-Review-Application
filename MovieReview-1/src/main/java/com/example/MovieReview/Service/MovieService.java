package com.example.MovieReview.Service;

import java.util.List;

import java.util.Optional;

import org.springframework.stereotype.Service;
import com.example.MovieReview.Movie.Movie;
import com.example.MovieReview.Repository.MovieRep;

@Service

public class MovieService {
	public MovieRep mr;
	
	public MovieService(MovieRep mr) {
		super();

		this.mr = mr;
	}
	public List<Movie> findAllMovies(){
		return mr.findAll();
	}
	
	public Optional<Movie> findMovieByImdbId(String imdbId){
		return mr.findMovieByImdbId(imdbId);
		
	}
	
	public Movie saveMovie(Movie m) {
		// TODO Auto-generated method stub
		return mr.save(m);
	}public String saveString(int id,String inputString) {
    	Optional<Movie> m = mr.findById(id);
        if (m.isPresent()) {
            Movie mo = m.get();
            mo.getReviews().add(inputString);
            mr.save(mo);
        } else {
            throw new IllegalArgumentException("MyData with ID " + id + " not found");
        }
		return inputString;
    }

	

}
