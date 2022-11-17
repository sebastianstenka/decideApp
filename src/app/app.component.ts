import { Component } from '@angular/core';
import { AppError } from './models/appError';
import { AppValues } from './models/appValues';
import answerValue from './utils/answers.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'decideApp';

  appValues: AppValues = {
    visiblePanel: 'one',
    question: '',
    mode: false,
    answers: answerValue.answers,
    custom: [],
    answer: null,
  };

  error: AppError = new AppError(false, '');

  handleError(error: AppError) {
    this.error = error;

    setTimeout(() => {
      this.error = new AppError(false, '');
    }, 2000);
  }
}
