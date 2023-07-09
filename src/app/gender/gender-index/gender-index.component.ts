import { Component, OnInit } from '@angular/core';
import { GendersService } from '../genders.service';

@Component({
  selector: 'app-gender-index',
  templateUrl: './gender-index.component.html',
  styleUrls: ['./gender-index.component.css']
})
export class GenderIndexComponent implements OnInit {
  constructor(private genderService:GendersService,private serviceGender:GendersService){

  }
  ngOnInit(): void {

     this.genderService.getAll().subscribe(gender =>{
      console.log(gender);
     }, error =>console.error('Data Not Found: '+error));
    
  }

}
