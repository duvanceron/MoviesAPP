import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input()
  maxRating = 5;
  @Input()
  selectedRating = 0;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  maxArray: any[] = [];
  voted = false;
  ratingLast = 0;
  ngOnInit(): void {
    this.maxArray = Array(this.maxRating).fill(0);
  }
  handleMouseEnter(index: number) {
    this.selectedRating = index + 1;
  }
  handleMouseLeave() {
    if (this.ratingLast !== 0) {
      this.selectedRating = this.ratingLast;
    } else {
      this.selectedRating = 0;
    }
  }
  rate(index: number) {
    this.selectedRating = index + 1;
    this.voted = true;
    this.ratingLast = this.selectedRating;
    this.rated.emit(this.selectedRating);
  }
}
