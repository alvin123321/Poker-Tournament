import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { TimerComponent } from './timer/timer.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopBannerComponent,
    LeftPanelComponent,
    TimerComponent,
    RightPanelComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'poker-tournament';
}
