import { Component } from '@angular/core';
import { genderCreateDTO } from '../gender';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gender-edit',
  templateUrl: './gender-edit.component.html',
  styleUrls: ['./gender-edit.component.css'],
})
export class GenderEditComponent {
  model: genderCreateDTO = { name: 'Comedia' };
  constructor(private router: Router) {}

  saveChanges(gender: genderCreateDTO) {
    console.log(gender);
    this.router.navigate(['/gender']);
  }
}
