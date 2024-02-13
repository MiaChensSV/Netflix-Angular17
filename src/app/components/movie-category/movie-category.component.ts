import { Component, Input, OnInit } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { Movie } from '../../types/movie';

@Component({
  selector: 'app-movie-category',
  standalone: true,
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.css'],
  imports: [CommonModule,MovieCardComponent],
})
export class MovieCategoryComponent implements OnInit {
  @Input() title = '';
  @Input() movieList:Movie[] = [];
  constructor() {}

  ngOnInit() {}
}
