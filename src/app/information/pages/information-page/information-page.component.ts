import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-page',
  imports: [],
  templateUrl: './information-page.component.html',
  styleUrl: './information-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationPageComponent {
  constructor(private router: Router) {}
  navigateToHome(): void {
    this.router.navigate(['/']);
  }
  
  navigateToAlbum(): void {
    this.router.navigate(['/gallery']);
  }
 }
