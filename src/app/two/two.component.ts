import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AppError } from '../models/appError';
import { AppValues } from '../models/appValues';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent {
  @Input() appValues: AppValues;
  @Output() hasErrors = new EventEmitter<AppError>();

  constructor() {}

  getResult() {
    if (this.validateResults()) {
      this.appValues.visiblePanel = 'three';
    } else {
      this.hasErrors.emit(new AppError(true, 'You need at least two answers'));
    }
  }

  validateResults() {
    if (this.appValues.mode) {
      if (this.appValues.custom.length > 1) {
        return true;
      }
      return false;
    }
    return true;
  }

  changeMode() {
    this.appValues.mode = true;
  }

  addCustom(custom) {
    if (custom.value !== '') {
      this.appValues.custom.push(custom.value);
    } else {
      this.hasErrors.emit(new AppError(true, 'The field is empty'));
    }
  }
}
