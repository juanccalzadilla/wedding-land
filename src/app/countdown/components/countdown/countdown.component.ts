import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownComponent { 

  private targetDate: Date = new Date('2025-06-07T15:00:00');

  days = signal('00');
  hours = signal('00');
  minutes = signal('00');
  seconds = signal('00');

  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private startCountdown(): void {
    this.subscription = interval(1000).subscribe(() => {
      this.updateCountdown();
    });

    this.updateCountdown();
  }

  private updateCountdown(): void {
    const now = new Date();
    const difference = this.targetDate.getTime() - now.getTime();

    if (difference < 0) {
      this.days.set('00');
      this.hours.set('00');
      this.minutes.set('00');
      this.seconds.set('00');
    } else {
      this.days.set(Math.floor(difference / (1000 * 60 * 60 * 24)).toString());
      this.hours.set(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString());
      this.minutes.set(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString());
      this.seconds.set(Math.floor((difference % (1000 * 60)) / 1000).toString());
    }

    this.days.set(this.days().padStart(2, '0'));
    this.hours.set(this.hours().padStart(2, '0'));
    this.minutes.set(this.minutes().padStart(2, '0'));
    this.seconds.set(this.seconds().padStart(2, '0'));
  }



}
