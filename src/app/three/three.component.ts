import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppValues } from '../models/appValues';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
})
export class ThreeComponent implements OnInit {
  @Input() appValues: AppValues;
  @Output() reset = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.showResults();
  }

  doItAgain() {
    this.showResults();
  }

  showResults() {
    var result = '';

    if (this.appValues.mode) {
      result =
        this.appValues.custom[
          Math.floor(Math.random() * this.appValues.custom.length)
        ];
    } else {
      result =
        this.appValues.answers[
          Math.floor(Math.random() * this.appValues.answers.length)
        ];
    }

    this.appValues.answer = result;
  }

  onStartOver() {
    this.reset.emit();
  }
}
