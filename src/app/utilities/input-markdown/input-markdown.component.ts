import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css'],
})
export class InputMarkdownComponent implements OnInit {
  @Output()
  valueChange: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {}

  contentMarkDown = '';
  inputTextArea(text: any) {
    this.contentMarkDown = text.value;
    this.valueChange.emit(this.contentMarkDown);
  }
} 
