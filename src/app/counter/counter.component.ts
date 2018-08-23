import { Component } from "@angular/core";
import { Subscription, timer } from "rxjs";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {
  constructor() {}
  ticks = 0;
  public hoursPlay1 = false;
  public hoursPlay2 = false;
  public minutesPlay1 = false;
  public minutesPlay2 = false;
  public secondsPlay1 = false;
  public secondsPlay2 = false;

  public hoursBefore1: number = 9;
  public hoursActive1: number = 0;
  public hoursBefore2: number = 9;
  public hoursActive2: number = 0;

  public minutesBefore1: number = 9;
  public minutesActive1: number = 0;
  public minutesBefore2: number = 9;
  public minutesActive2: number = 0;

  public secondsBefore1: number = 9;
  public secondsActive1: number = 0;
  public secondsBefore2: number = 9;
  public secondsActive2: number = 0;

  sub: Subscription = timer(1, 500).subscribe(t => {
    this.hoursPlay1 = false;
    this.hoursPlay2 = false;
    this.minutesPlay1 = false;
    this.minutesPlay2 = false;
    this.secondsPlay1 = false;
    this.secondsPlay2 = !this.secondsPlay2;
    this.ticks = t;
    let secondsDisplay: string = this.getSeconds(this.ticks).toString();
    let minutesDisplay = this.getMinutes(this.ticks).toString();
    let hoursDisplay = this.getHours(this.ticks);

    if (this.secondsPlay2) {
      console.log(secondsDisplay);
      this.secondsBefore2 = this.secondsActive2;
      this.secondsActive2 = parseInt(secondsDisplay[1]);
      let temp: number = parseInt(secondsDisplay[0]);
      if (this.secondsActive1 != temp) {
        this.secondsPlay1 = true;
        this.secondsBefore1 = this.secondsActive1;
        this.secondsActive1 = temp;
      }
      temp = parseInt(minutesDisplay[1]);
      if (this.minutesActive2 != temp) {
        this.minutesPlay2 = true;
        this.minutesBefore2 = this.minutesActive2;
        this.minutesActive2 = temp;
      }
      temp = parseInt(minutesDisplay[0]);
      if (this.minutesActive1 != temp) {
        this.minutesPlay1 = true;
        this.minutesBefore1 = this.minutesActive1;
        this.minutesActive1 = temp;
      }
      temp = parseInt(hoursDisplay[1]);
      if (this.hoursActive2 != temp) {
        this.hoursPlay2 = true;
        this.hoursBefore2 = this.hoursActive2;
        this.hoursActive2 = temp;
      }
      temp = parseInt(hoursDisplay[0]);
      if (this.hoursActive1 != temp) {
        this.hoursPlay1 = true;
        this.hoursBefore1 = this.hoursActive1;
        this.hoursActive1 = temp;
      }
    }
  });
  private getSeconds(ticks: number) {
    var time = new Date();
    return ("0" + time.getSeconds()).slice(-2);
  }
  private getMinutes(ticks: number) {
    var time = new Date();
    return ("0" + time.getMinutes()).slice(-2);
  }
  private getHours(ticks: number) {
    var time = new Date();
    return ("0" + time.getHours()).slice(-2);
  }
}
