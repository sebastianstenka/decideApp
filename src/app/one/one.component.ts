import { Component, Input, OnInit } from '@angular/core';
import { AppValues } from '../models/appValues';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent {
  @Input() appValues: AppValues;

  constructor() {}

  onAddQuestion(question: HTMLInputElement) {
    //const appValuesCopy = this.appValues;

    if (question.value !== '') {
      this.appValues.visiblePanel = 'two';
      this.appValues.question = question.value;
    } else {
      //error
    }
  }
}
