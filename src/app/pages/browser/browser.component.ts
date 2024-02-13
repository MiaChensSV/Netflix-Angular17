import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../types/movie';
import { tmdbConfig } from '../../constants/config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-browser',
  standalone: true,
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css'],
  imports: [CommonModule, FormsModule, HeaderComponent, MovieCategoryComponent],
})
export class BrowserComponent implements OnInit {
  movieService = inject(MovieService);
  popularMovie: Movie[] = [];
  topRatedMovie: Movie[] = [];
  upComingMovie: Movie[] = [];
  nowPlayingMovie: Movie[] = [];
  bannerMovie!: Movie;
  tmdbConfig = tmdbConfig;
  public domSanitise = inject(DomSanitizer);
  constructor() {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((result: any) => {
      this.popularMovie = result.results;
      this.bannerMovie = this.popularMovie[0];
      this.movieService
        .getMovieVideos(this.bannerMovie.id)
        .subscribe((res: any) => {
          this.bannerMovie.videoKey = res.results.find(
            (x: any) => (x.site = 'YouTube')
          ).key;
        });
    });
    this.movieService.getTopRatedMovies().subscribe((result: any) => {
      this.topRatedMovie = result.results;
    });
    this.movieService.getUpComingMovies().subscribe((result: any) => {
      this.upComingMovie = result.results;
    });
    this.movieService.getNowPlayingMovies().subscribe((result: any) => {
      this.nowPlayingMovie = result.results;
    });
  }
}
