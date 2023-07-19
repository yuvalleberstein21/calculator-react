import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}

  bannerResults: any = [];
  trendingMovieResults: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  scienceFictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adeventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scienceFictionMovie();
    this.thrillerMovie();
  }

  //banner data
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerResult');
      this.bannerResults = result.results;
    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      this.trendingMovieResults = result.results;
      console.log(result, 'treding');
    });
  }

  //action
  actionMovie() {
    this.service.FetchActionMovies().subscribe((result) => {
      console.log(result, 'actionMovies#');
      this.actionMovieResult = result.results;
    });
  }

  //adeventure
  adeventureMovie() {
    this.service.FetchAdventureMovies().subscribe((result) => {
      console.log(result, 'adeventureMovies#');
      this.adventureMovieResult = result.results;
    });
  }
  //animation
  animationMovie() {
    this.service.FetchAnimationMovies().subscribe((result) => {
      console.log(result, 'animationMovies#');
      this.animationMovieResult = result.results;
    });
  }
  //comedy
  comedyMovie() {
    this.service.FetchComedyMovies().subscribe((result) => {
      console.log(result, 'comedyMovies#');
      this.comedyMovieResult = result.results;
    });
  }
  //documentary
  documentaryMovie() {
    this.service.FetchDocumentaryMovies().subscribe((result) => {
      console.log(result, 'documentaryMovies#');
      this.documentaryMovieResult = result.results;
    });
  }

  // scienceFiction
  scienceFictionMovie() {
    this.service.FetchScienceFictionMovies().subscribe((result) => {
      console.log(result, 'scienceFictionMovies#');
      this.scienceFictionMovieResult = result.results;
    });
  }
  //thriller
  thrillerMovie() {
    this.service.FetchThrillerMovies().subscribe((result) => {
      console.log(result, 'thrillerMovies#');
      this.thrillerMovieResult = result.results;
    });
  }
}
