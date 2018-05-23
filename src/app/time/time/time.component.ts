import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  date = new Date();
  day: any;
  month: string;
  year: any;
  currentTimeString: string;
  hr: any;
  min: any;
  currentDateString: string;
  foodStatus: string;

  constructor() {
  }

  ngOnInit() {
    this.getCurrentTime();
    this.getCurrentDate();
    this.getFoodStatus();
    setInterval(() => {
      this.date = new Date();
      this.getCurrentTime();
      this.getCurrentDate();
      this.getFoodStatus();
    }, 60000);
  }

  getTextMonth(num) {
    const monthMap = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря'
    ];

    return monthMap[num];
  }


  getCurrentTime() {
    this.hr = (+this.date.getHours() >= 10) ? this.date.getHours() : `0${this.date.getHours()}`;
    this.min = (+this.date.getMinutes() >= 10) ? this.date.getMinutes() : `0${this.date.getMinutes()}`;
    this.currentTimeString = `${this.hr}:${this.min}`;
  }

  getCurrentDate() {
    this.day = (+this.date.getDate() >= 10) ? this.date.getDate() : `0${this.date.getDate()}`;
    this.month = this.getTextMonth(this.date.getMonth());
    this.year = this.date.getFullYear();
    this.currentDateString = `${this.day} ${this.month} ${this.year} года`;
  }

  getFoodStatus() {
    const time = this.date.getHours();
    if (time <= 9 || time >= 21) {
      this.foodStatus = 'С утра будет завтрак';
    } else if (time > 9 && time <= 14) {
      this.foodStatus = 'Не пропустите обед';
    } else {
      this.foodStatus = 'Время близится к ужину';
    }
  }

};
