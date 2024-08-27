import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import this to use ngFor

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [
    CommonModule, // Ensure this is imported
  ],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent implements OnInit {
  public minutes: number = 1;
  public seconds: number = 0;
  public currentLevel: number = 0;
  public breakTime: number = 0;

  public smallBlind = [
    25,
    50,
    75,
    100,
    'break',
    125,
    150,
    175,
    200,
    'break',
    300,
    400,
    500,
    700,
    'break',
    1000,
    1500,
    2000,
    3000,
    'break',
    4000,
    5000,
    6000,
    10000,
    'break',
    10000,
    10000,
    10000,
    'break',
    10000,
    10000,
    10000,
    'break',
    10000,
    10000,
    10000,
    'break',
    10000,
    10000,
    10000,
    'break',
  ];

  public bigBlind = [
    50,
    100,
    150,
    200,
    'break',
    250,
    300,
    350,
    400,
    'break',
    600,
    800,
    1000,
    1400,
    'break',
    2000,
    3000,
    4000,
    6000,
    'break',
    8000,
    10000,
    12000,
    20000,
    'break',
    20000,
    20000,
    20000,
    20000,
    'break',
    20000,
    20000,
    20000,
    20000,
    'break',
    20000,
    20000,
    20000,
    20000,
    'break',
    20000,
    20000,
    20000,
    20000,
    'break',
    20000,
    20000,
    20000,
    20000,
  ];

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
        if (this.seconds < 0) {
          if (this.minutes > 0) {
            this.minutes--;
            this.seconds = 5;
          } else {
            {
              if (this.smallBlind[this.currentLevel + 1] === 'break') {
                this.breakTime++;
              }
              this.currentLevel++;

              this.minutes = 1;
              this.seconds = 0;
            }
          }
        }
      }
    }, 500);
  }
}
