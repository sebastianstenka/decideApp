import { Component, Input, OnInit } from '@angular/core';
import { AppValues } from '../models/appValues';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
})
export class ThreeComponent implements OnInit {
  @Input() appValues: AppValues;

  constructor() {}

  ngOnInit(): void {}
}
