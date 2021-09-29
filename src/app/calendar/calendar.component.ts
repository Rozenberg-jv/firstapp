import { Component } from '@angular/core';
import { DayData } from '../interfaces/model';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  targetDate: Date = new Date(2021, 8, 1);

  daysArray = this.initCalculateDaysArray(
    this.targetDate.getFullYear(),
    this.targetDate.getMonth()
  );

  initCalculateDaysArray(year: number, month: number): DayData[][] {
    console.log(new Date(year, month));

    let result: DayData[][] = [[]];

    let dayNumber = 1;
    const lastDayOfPrevMonthDate = new Date(year, month, 0);
    const firstDayOfWeek = new Date(year, month, 1).getDay() + 1;
    const lastDayOfMonthDate = new Date(year, month + 1, 0);
    const firstDayOfNextMonthDate = new Date(year, month + 1, 1);

    // console.log(lastDayOfPrevMonthDate.getDate());
    // console.log(firstDayOfWeek);
    // console.log(lastDayOfMonthDate.getDate());

    // prev
    for (let i = firstDayOfWeek - 3; i >= 0; i--) {
      result[0].push(
        new DayData(
          lastDayOfPrevMonthDate.getDate() - i,
          lastDayOfPrevMonthDate.getMonth() + 1,
          true
        )
      );
    }
    // cur
    for (; result[0].length < 7; dayNumber++) {
      result[0].push(new DayData(dayNumber, month + 1));
    }

    for (let i = 1; i <= 4; i++) {
      result.push([]);
      for (let j = 0; j < 7 && dayNumber <= lastDayOfMonthDate.getDate(); j++) {
        result[i].push(new DayData(dayNumber++, month + 1));
      }
    }
    // next
    for (let i = 1; result[4].length < 7 && result.length <= 5; i++) {
      result[4].push(
        new DayData(i, firstDayOfNextMonthDate.getMonth() + 1, true)
      );
    }

    console.log(result);

    return result;
  }

  nextMonth() {
    this.targetDate.setMonth(this.targetDate.getMonth() + 1);
    this.daysArray = this.initCalculateDaysArray(
      this.targetDate.getFullYear(),
      this.targetDate.getMonth()
    );
  }

  prevMonth() {
    this.targetDate.setMonth(this.targetDate.getMonth() - 1);
    this.daysArray = this.initCalculateDaysArray(
      this.targetDate.getFullYear(),
      this.targetDate.getMonth()
    );
  }
}
