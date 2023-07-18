import { Component } from '@angular/core';
import { cineCreateDTO } from '../cine';

@Component({
  selector: 'app-cine-create',
  templateUrl: './cine-create.component.html',
  styleUrls: ['./cine-create.component.css']
})
export class CineCreateComponent {
  saveChanges(cine:cineCreateDTO){
    console.log(cine);
  }

}
