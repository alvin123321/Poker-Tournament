import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent implements OnInit {
  public minutes: number = 15;
  public seconds: number = 0;
  private intervalId: any;
  constructor() {
    // Constructor logic here, typically dependency injection
  }

  ngOnInit(): void {
    this.startTimer();

    // Initialization logic here
  }

  private startTimer(): void {
    this.intervalId = setInterval(() => {
      // Decrease time by 1 second
      if (this.minutes >= 0) {
        this.seconds--;
        console.log(this.seconds);
        if (this.seconds < 0) {
          console.log('---------');
          if (this.minutes > 0) {
            this.minutes--;
            this.seconds = 59;
          } else {
            {
              this.minutes = 15;
              this.seconds = 0;
              clearInterval(this.intervalId);
            }
          }
        }
      }

      // // Decrease time by 1 second
      // if (totalTime > 0 && this.seconds > 0) {
      //   this.seconds--;
      //   console.log(this.seconds);
      //   if (this.seconds < 0) {
      //     this.minutes--;
      //     this.seconds = 59;
      //   }
      // } else if ((this.seconds = 0 && this.minutes > 0)) {
      // } else {
      //   clearInterval(this.intervalId);
      // }
    }, 1000);
  }
}
