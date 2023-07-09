import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreateDTO } from '../actor';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.css'],
})
export class ActorFormComponent implements OnInit {
  form: FormGroup | any;
  @Output()
  onSubmit: EventEmitter<actorCreateDTO> = new EventEmitter<actorCreateDTO>(); 
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', { validators: [Validators.required] }],
      birthDate: '',
    });
  }
  SaveChanges(){}
}
