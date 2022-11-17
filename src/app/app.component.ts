import { Component, OnInit } from '@angular/core';
import { AppValues } from './models/appValues';
import answerValue from './utils/answers.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'decideApp';

  appValues: AppValues = {
    visiblePanel: 'one',
    question: '',
    mode: false,
    answers: answerValue.answers,
    custom: [],
    answer: null,
  };

  ngOnInit(): void {
    console.log(answerValue.answers);
  }
}
