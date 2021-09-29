interface DayDataInterface {
  day: number;
  month: number;
}

export class DayData implements DayDataInterface {
  day: number;
  month: number;
  isNonCurrentMonth?: boolean;
  isToday?: boolean;

  constructor(day: number, month: number, isNonCurrentMonth?: boolean) {
    this.day = day;
    this.month = month;
    this.isNonCurrentMonth = isNonCurrentMonth;
    this.isToday =
      this.month === new Date().getMonth() + 1 &&
      this.day === new Date().getDate();
  }
}
