import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../helper';
import { __values } from 'tslib';

@Component({
  selector: 'app-generic-img',
  templateUrl: './generic-img.component.html',
  styleUrls: ['./generic-img.component.css'],
})
export class GenericImgComponent implements OnInit {
  @Output() fileSelected: EventEmitter<File> = new EventEmitter<File>();
  @Input()
  imageLoad:string | any;
  imageBase64: string | any;
  ngOnInit(): void {
 
  }
  constructor() {}
  viewChanges(event:any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      toBase64(file).then((valueF) => this.imageBase64 = valueF).catch(error => console.log(error));
      this.fileSelected.emit(file);
    }
  }
}
