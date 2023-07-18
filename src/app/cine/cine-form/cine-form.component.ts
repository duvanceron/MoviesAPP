import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { cineCreateDTO } from '../cine';

@Component({
  selector: 'app-cine-form',
  templateUrl: './cine-form.component.html',
  styleUrls: ['./cine-form.component.css'],
})
export class CineFormComponent implements OnInit {
  form: any;
  @Input()
  model: cineCreateDTO | undefined;
  @Output()
  modelChange: EventEmitter<cineCreateDTO> = new EventEmitter<cineCreateDTO>();
  constructor(private formbuilder: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.modelChange.emit(this.form.value);
  }
}
