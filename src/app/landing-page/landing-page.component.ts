import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.moviesCurrently = [
        {
          title: 'Spiderman',
          releaseDate: new Date(),
          price: 1400,
          poster:
            'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/b0OfuUs4lHGWG4VNlHcXwL5a.jpg',
        },
        {
          title: 'Dog Pet ',
          releaseDate: new Date('2023-6-8'),
          price: 2400,
          poster: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        },
        {
          title: 'Hamburger ',
          releaseDate: new Date('2023-6-8'),
          price: 2400,
          poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0aj9m9n1xXdvX1HAyfdOZX2H_SP-WbXK7-Q&usqp=CAU',
        },
      ];
    }, 500);
  }
  title = 'Movies';
  moviesCurrently: any;
  upcomingMovies = [
    // {
    //   title: 'Spiderman',
    //   releaseDate: new Date(),
    //   price: 1400,
    // },
    // {
    //   title: 'lucky goal',
    //   releaseDate: new Date('2023-6-8'),
    //   price: 2400,
    // },
  ];
  handleRated(vote: number): void {}
  raiseNumber(pNumber: number): number {
    return pNumber * pNumber;
  }
}
