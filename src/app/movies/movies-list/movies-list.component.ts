import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {  
  @Input()
  movies: any;
  
  ngOnInit(): void {}
  title = 'Movies';

  Remove(index: number) {
    this.movies.splice(index, 1);
  }
}
