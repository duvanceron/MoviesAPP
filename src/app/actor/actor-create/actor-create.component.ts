import { Component, OnInit } from '@angular/core';
import { actorCreateDTO } from '../actor';

@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit{
  ngOnInit(): void {

  }
  saveChanges(actor:actorCreateDTO){
    console.log(actor);
  }

}
