import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CountdownComponent } from "../../components/countdown/countdown.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter-page',
  imports: [CountdownComponent],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {


  constructor(private router: Router) {}
  
  navigateToInfo(): void {
    this.router.navigate(['/info']);
  }
  
  navigateToAlbum(): void {
    this.router.navigate(['/album']);
  }
 
  
}
