package com.example.MovieReview.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.MovieReview.Movie.Movie;
import com.example.MovieReview.Service.MovieService;

@RestController
@RequestMapping("/api/movies")
@CrossOrigin(origins = "*")

public class MoviewController {
	@Autowired
	public MovieService ms;
	
	public MoviewController(MovieService ms) {
		super();
		this.ms = ms;
	}
	@PostMapping
	public ResponseEntity<Movie> saveMovies(@RequestBody Movie m){
		return new ResponseEntity<Movie>(ms.saveMovie(m),HttpStatus.CREATED);
	}
	@GetMapping
	public ResponseEntity<List<Movie>> findAllMovies(){
		return new ResponseEntity<List<Movie>>(ms.findAllMovies(),HttpStatus.OK);
	}
	
	@GetMapping("/{imdbId}")
	public ResponseEntity<Optional<Movie>> findMovieByImdbId(@PathVariable String imdbId){
		return new ResponseEntity<Optional<Movie>>(ms.findMovieByImdbId(imdbId),HttpStatus.OK);
	}
	
	@PostMapping("/add")
    
	public ResponseEntity<String>  addData(@RequestParam int Id, @RequestBody String d){
		return new ResponseEntity<String>(ms.saveString(Id,d), HttpStatus.CREATED);
	}
	

}
