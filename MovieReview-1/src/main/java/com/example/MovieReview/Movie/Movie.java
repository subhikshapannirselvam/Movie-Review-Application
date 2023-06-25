package com.example.MovieReview.Movie;

import java.util.ArrayList;

import java.util.List;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


    @Entity
	@Data
	@Table(name="Movie")
	public class Movie {
	    @Id
		 @GeneratedValue(strategy=GenerationType.IDENTITY)
		   @Column
		private int  id;
	    @Column
	    
	    private String imdbId;
	    @Column
	    private String title;
	    @Column
	    private String releaseDate;
	    @Column
	    private String trailerLink;
	    @Column
	    private String poster;
	    @Column
	    private List<String> backdrops;
	    @Column
	    private List<String> genres;
	    @Column
	    private List<String> reviews;
	    
	
		public int getId() {
			return id;
		}
		public void setId(Integer id) {
			this.id=id;
		}
		public String getImdbId() {
			return imdbId;
		}
		public void setImdbId(String imdbId) {
			this.imdbId = imdbId;
		}
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		public String getReleaseDate() {
			return releaseDate;
		}
		public void setReleaseDate(String releaseDate) {
			this.releaseDate = releaseDate;
		}
		public String getTrailerLink() {
			return trailerLink;
		}
		public void setTrailerLink(String trailerLink) {
			this.trailerLink = trailerLink;
		}
		public String getPoster() {
			return poster;
		}
		public void setPoster(String poster) {
			this.poster = poster;
		}
		public List<String> getBackdrops() {
			return backdrops;
		}
		public void setBackdrops(List<String> backdrops) {
			this.backdrops = backdrops;
		}
		public List<String> getGenres() {
			return genres;
		}
		public void setGenres(List<String> genres) {
			this.genres = genres;
		}
		public List<String> getReviews() {
			return reviews;
		}
		public void setReviews(List<String> reviews) {
			this.reviews = reviews;
		}
	   
	    

	    
}
