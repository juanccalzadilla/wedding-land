import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CountdownComponent } from "../../components/countdown/countdown.component";
import { Router } from '@angular/router';
import { WeddingAccessService } from '../../../core/services/wedding_access_service';

@Component({
  selector: 'app-counter-page',
  imports: [CountdownComponent],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {

  public albumButtonIsDisabled = signal(true);
  public zoomVideoCallButtonIsDisabled = signal(true);

  public zoomLink: String = "https://us05web.zoom.us/j/8461339861?pwd=o8Xp1QIcR3XWWyxhsiAzGeBxbWue4x.1&omn=84134889444";

  constructor(private router: Router, private ws: WeddingAccessService) {
    this.albumButtonIsDisabled.set(this.ws.isBeforeWedding())
    this.zoomVideoCallButtonIsDisabled.set(!this.ws.isDuringWedding())
  }



  navigateToInfo(): void {
    this.router.navigate(['/info']);
  }

  navigateToAlbum(): void {
    this.router.navigate(['/album']);
  }

  navigateToZoom(): void {
    window.location.href = this.zoomLink.toString();
  }

}
