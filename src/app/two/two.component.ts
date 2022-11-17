import { Component, Input, OnInit } from '@angular/core';
import { AppValues } from '../models/appValues';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  @Input() appValues: AppValues;

  constructor() {}

  ngOnInit(): void {
    console.log(this.appValues);
  }
}
