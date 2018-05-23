import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  date = new Date();
  delta: any;
  status: string;

  constructor() {
  }

  ngOnInit() {
    this.calculateSummerCounter();
  }

  calculateSummerCounter() {
    const currentYear = this.date.getFullYear();
    const currentMonth = this.date.getMonth();
    let startSummer = new Date(currentYear, 5, 1);


    if (currentMonth >= 5 && currentMonth < 8) {
      this.status = 'Сейчас лето';
    } else if (currentMonth >= 8) {
      startSummer = new Date(currentYear + 1, 5, 1);
      this.delta = startSummer - this.date;
      this.status = `До лета осталось ${this.delta} дней.`;
    } else {
      this.delta = Math.abs(parseInt((this.date - startSummer) / (24 * 3600 * 1000), 10));
      this.status = `До лета осталось ${this.delta} дней.`;
    }

  }

}
