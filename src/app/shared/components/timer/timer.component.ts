import { Component, Input, OnChanges, OnDestroy, Output, SimpleChanges, signal } from '@angular/core';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

import { TimerPipe } from '@shared/pipes';

@Component({
  selector: 'shared-timer',
  standalone: true,
  imports: [
    TimerPipe,

    //third-party
    TranslocoModule
  ],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnChanges, OnDestroy {
  
  @Input('activate')
  public isActive = false;

  @Output()
  public totalTime = 0;
  
  private intervalTimer: any;
  public currentTime = signal(0);

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isActive) { this.startTimer(); }
    else { this.pauseTimer(); }
  }
  
  ngOnDestroy(): void {
    this.pauseTimer();
  }

  private startTimer(): void {
    this.intervalTimer = setInterval(() => {
      this.currentTime.update(t => t + 1);
    }, 1000);
  }

  private pauseTimer(): void {
    this.totalTime = this.currentTime();
    clearInterval(this.intervalTimer);
  }

}
