import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../types/movie';
import { tmdbConfig } from '../../constants/config';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie ;
  tmdbConfig = tmdbConfig;
  constructor() {}

  ngOnInit() {}
}
