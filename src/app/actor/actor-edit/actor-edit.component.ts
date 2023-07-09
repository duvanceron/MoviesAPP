import { Component } from '@angular/core';
import { actorCreateDTO } from '../actor';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css'],
})
export class ActorEditComponent {
  model: actorCreateDTO = { name: 'Pablo', birthDate: new Date() };
  saveChanges(actor: actorCreateDTO) {}
}
