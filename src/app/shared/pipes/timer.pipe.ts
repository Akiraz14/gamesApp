import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
  standalone: true
})
export class TimerPipe implements PipeTransform {

  transform(totalSeconds: number): string {
    const hours = Math.floor(totalSeconds/3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds/60);
    totalSeconds %= 60;
    const seconds = totalSeconds;

    let timeText = '';
    timeText = (hours === 0) ? '' : `${timeText}${hours<10 ? '0' : ''}${hours}:`;
    timeText = `${timeText}${minutes<10 ? '0' : ''}${minutes}:`;
    timeText = `${timeText}${seconds<10 ? '0' : ''}${seconds}`;
    
    return timeText;
  }

}
