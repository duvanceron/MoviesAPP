import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cine-form',
  templateUrl: './cine-form.component.html',
  styleUrls: ['./cine-form.component.css'],
})
export class CineFormComponent implements OnInit {
  form: any;
  ngOnInit(): void {}
  constructor(private formbuilder: FormBuilder) {
    this.form = this.formbuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  saveChanges() {}
}
