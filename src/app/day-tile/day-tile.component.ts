import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'day-tile',
  templateUrl: './day-tile.component.html',
  styleUrls: ['./day-tile.component.css'],
})
export class DayTileComponent implements OnInit {
  @Input() day: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
