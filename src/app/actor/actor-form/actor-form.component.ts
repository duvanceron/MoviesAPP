import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreateDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.css'],
})
export class ActorFormComponent implements OnInit {
  form: FormGroup | any;
  @Output()
  onSubmit: EventEmitter<actorCreateDTO> = new EventEmitter<actorCreateDTO>();
  @Input()
  model: actorDTO | undefined;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', { validators: [Validators.required] }],
      birthDate: '',
      photo:''
    });
    if (this.model != undefined) {
      this.form.patchValue(this.model);
    }
  }
  SaveChangesForm() {
    console.log(this.form.value);
    this.onSubmit.emit(this.form.value);
  }
  fileSelected(file:any){
    this.form.get('photo').setValue(file);  
  }
}
