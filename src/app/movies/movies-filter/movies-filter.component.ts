import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location} from '@angular/common';
@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css'],
})
export class MoviesFilterComponent implements OnInit {
  form!: FormGroup;
  gender = [
    { id: 1, name: 'Accion' },
    { id: 2, name: 'comedia' },
    { id: 3, name: 'Infantil' },
  ];
  movies = [
    {
      title: 'Spiderman',
      inCine: true,
      nextRelease: false,
      gender: [1, 2],
      poster:
        'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/b0OfuUs4lHGWG4VNlHcXwL5a.jpg',
    },
    {
      title: 'Angry Birds',
      inCine: false,
      nextRelease: true,
      gender: [1],
      poster:
        'https://www.clarin.com/img/2019/08/14/en-angry-birds-2-el___1Zk1emoZk_640x361__1.jpg',
    },
  ];
  formOriginal = {
    title: '',
    genderId: 0,
    nextRelease: false,
    inCine: false,
  };
  moviesOrigininal = this.movies;
  constructor(private formBuilder: FormBuilder,private location:Location) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formOriginal);
    this.form.valueChanges.subscribe((value) => {
      this.movies = this.moviesOrigininal;
      this.searchMovie(value);
      this.writeParametersUrl();
    });
  }
  private writeParametersUrl(){
    var queryStrings =[];
    var valueForm = this.form.value;
    if(valueForm.title){
      queryStrings.push(`title=${valueForm.title}`);

    }
    console.log(queryStrings.join('&'));
    this.location.replaceState('movies/search',queryStrings.join('&'));

  }
  searchMovie(value: any) {
    if (value.title) {
   
      this.movies = this.movies.filter(
        (movie) => movie.title.indexOf(value.title) != -1
      );
    }
    if (value.genderId != 0) {
    
      this.movies = this.movies.filter(
        (movie) => movie.gender.indexOf(value.genderId) != -1
      );
    }
    if (value.nextRelease) {
    
      this.movies = this.movies.filter((movie) => movie.nextRelease);
    }
    if (value.inCine) {
  
      this.movies = this.movies.filter((movie) => movie.inCine);
    }
  }

  clean() {
    this.form.patchValue(this.formOriginal);
  }
}
