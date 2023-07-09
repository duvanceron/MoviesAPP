import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { genderCreateDTO } from '../gender';
import { GendersService } from '../genders.service';

@Component({
  selector: 'app-create-gender',
  templateUrl: './create-gender.component.html',
  styleUrls: ['./create-gender.component.css'],
})
export class CreateGenderComponent implements OnInit {
  errors : string[]=[];
  constructor(private router: Router, private genderService: GendersService) {}
  ngOnInit(): void {
  }
  saveChanges(genderDTO :genderCreateDTO) {
    this.genderService.create(genderDTO).subscribe(()=>{
      this.router.navigate(['/gender']);
    },error => console.error(error));
   
  }
}
