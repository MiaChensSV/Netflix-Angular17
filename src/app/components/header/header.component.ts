import { Component, OnInit } from '@angular/core';
import { LOGO_URL } from '../../constants/config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logoUrl = LOGO_URL;
  constructor() {}

  ngOnInit() {}
}
