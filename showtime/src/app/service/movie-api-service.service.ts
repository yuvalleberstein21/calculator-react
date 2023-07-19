import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) {}

  baseURL = 'https://api.themoviedb.org/3';
  apiKey = 'ccd0c8ae4900b6230a174f8bee12018d';

  bannerApiData(): Observable<any> {
    return this.http.get(
      `${this.baseURL}/trending/all/week?api_key=${this.apiKey}`
    );
  }

  // trendingMovieApiData

  trendingMovieApiData(): Observable<any> {
    return this.http.get(
      `${this.baseURL}/trending/movie/day?api_key=${this.apiKey}`
    );
  }

  //Search movie
  getSearchMovie(data: any): Observable<any> {
    return this.http.get(
      `${this.baseURL}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`
    );
  }

  //get movie details
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${this.baseURL}/movie/${data}?api_key=${this.apiKey}`
    );
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(
      `${this.baseURL}/movie/${data}/videos?api_key=${this.apiKey}`
    );
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(
      `${this.baseURL}/movie/${data}/credits?api_key=${this.apiKey}`
    );
  }

  // action movies
  FetchActionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseURL}/discover/movie?api_key=${this.apiKey}&with_genres=28`
    );
  }

  // adventure movies
  FetchAdventureMovies(): Observable<any> {
    return this.http.get(
      `${this.baseURL}/discover/movie?api_key=${this.apiKey}&with_genres=12`
    );
  }

  //Animation movies
  FetchAnimationMovies(): Observable<any> {
    return this.http.get(
      `${this.baseURL}/discover/movie?api_key=${this.apiKey}&with_genres=16`
    );
  }

  //Comedy movies
  FetchComedyMovies(): Observable<any> {
    return this.http.get(
      `${this.baseURL}/discover/movie?api_key=${this.apiKey}&with_genres=35`
    );
  }

  //Documentary movies
  FetchDocumentaryMovies(): Observable<any> {
    return this.http.get(
      `${this.baseURL}/discover/movie?api_key=${this.apiKey}&with_genres=99`
    );
  }

  //science-fiction movies
  FetchScienceFictionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseURL}/discover/movie?api_key=${this.apiKey}&with_genres=878`
    );
  }
  //thriller movies
  FetchThrillerMovies(): Observable<any> {
    return this.http.get(
      `${this.baseURL}/discover/movie?api_key=${this.apiKey}&with_genres=53`
    );
  }
}
