import { Component } from '@angular/core';
import { cineCreateDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-cine-edit',
  templateUrl: './cine-edit.component.html',
  styleUrls: ['./cine-edit.component.css'],
})
export class CineEditComponent {
  model: cineDTO = { name: "cine N° 1" };
  saveChanges(cine: cineCreateDTO) {
    console.log(cine);
  }
}
