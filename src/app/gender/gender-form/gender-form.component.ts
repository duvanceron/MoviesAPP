import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { firstLetterUpper } from 'src/app/utilities/Validator/firstLetter';
import { genderCreateDTO } from '../gender';

@Component({
  selector: 'app-gender-form',
  templateUrl: './gender-form.component.html',
  styleUrls: ['./gender-form.component.css'],
})
export class GenderFormComponent implements OnInit {
  form: any = {};
@Input()
model :genderCreateDTO | undefined;

@Input()
error: string[]=[];

  @Output()
  onSubmit: EventEmitter<genderCreateDTO> = new EventEmitter<genderCreateDTO>();
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [
        '',
        {
          validators: [Validators.required, firstLetterUpper()],
        },
      ],
    });
  }

  ngOnInit(): void {
    if(this.model!== undefined){
      this.form.patchValue(this.model);
    }
  }

  getErrorField() {
    let field = this.form.get('name');
    if (field?.hasError('required')) {
      return 'the field name es required';
    }
    if (field?.hasError('firstLetterUpper')) {
      return field.getError('firstLetterUpper').message;
    }
    return '';
  }
  saveChanges() {
    this.onSubmit.emit(this.form.value);
  }
}
