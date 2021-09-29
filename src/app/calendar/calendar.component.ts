import { Component } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  today: Date = new Date();

  daysArray = this.initCalculateDaysArray(2021, 2);

  initCalculateDaysArray(year: number, month: number): number[][] {
    console.log(new Date(year, month));

    let result: number[][] = [[]];

    let dayNumber = 1;
    const lastDayOfPrevMonth = new Date(year, month, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

    console.log(lastDayOfPrevMonth);
    console.log(firstDayOfWeek);
    console.log(lastDayOfMonth);

    for (let i = firstDayOfWeek - 2; i >= 0; i--) {
      result[0].push(lastDayOfPrevMonth - i);
    }

    for (; dayNumber <= 8 - firstDayOfWeek; dayNumber++) {
      result[0].push(dayNumber);
    }

    for (let i = 1; i <= 4; i++) {
      result.push([]);
      for (let j = 0; j < 7 && dayNumber <= lastDayOfMonth; j++) {
        result[i].push(dayNumber++);
      }
    }

    console.log(result);

    return result;
  }
}
