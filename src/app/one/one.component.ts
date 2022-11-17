import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AppError } from '../models/appError';
import { AppValues } from '../models/appValues';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent {
  @Input() appValues: AppValues;
  @Output() hasErrors = new EventEmitter<AppError>();

  constructor() {}

  onAddQuestion(question: HTMLInputElement) {
    if (question.value !== '') {
      this.appValues.visiblePanel = 'two';
      this.appValues.question = question.value;
    } else {
      this.hasErrors.emit(
        new AppError(true, 'Sorry, you need to enter something.')
      );
    }
  }
}
