import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-show',
  templateUrl: './error-show.component.html',
  styleUrls: ['./error-show.component.css']
})
export class ErrorShowComponent {
  
  
@Input()
errores: string[]=[];

}
