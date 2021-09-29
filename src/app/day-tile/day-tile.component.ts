import { Component, Input, OnInit } from '@angular/core';

import { DayData } from '../interfaces/model';

@Component({
  selector: 'day-tile',
  templateUrl: './day-tile.component.html',
  styleUrls: ['./day-tile.component.css'],
})
export class DayTileComponent implements OnInit {
  @Input() dayData?: DayData;

  constructor() {}

  ngOnInit(): void {}
}
