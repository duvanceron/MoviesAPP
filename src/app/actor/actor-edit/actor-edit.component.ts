import { Component } from '@angular/core';
import { actorCreateDTO } from '../actor';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent {
  saveChanges(actor:actorCreateDTO){}

}
