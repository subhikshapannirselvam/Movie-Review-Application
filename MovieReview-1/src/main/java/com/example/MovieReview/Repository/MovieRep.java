package com.example.MovieReview.Repository;

import java.util.Optional;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MovieReview.Movie.Movie;

public interface MovieRep extends JpaRepository<Movie,Integer>{

	Optional<Movie> findMovieByImdbId(String imdbId);
}
