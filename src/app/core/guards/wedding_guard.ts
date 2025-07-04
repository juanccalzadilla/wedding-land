// wedding.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WeddingAccessService } from '../services/wedding_access_service';

@Injectable({ providedIn: 'root' })
export class WeddingGuard implements CanActivate {
  constructor(
    private accessService: WeddingAccessService,
    private router: Router
  ) {}

  public dotsMemoryLink : String = "https://web.dotstheapp.com/a?groupId=1811562";
  // public zoomLink: String = "https://us05web.zoom.us/j/8461339861?pwd=o8Xp1QIcR3XWWyxhsiAzGeBxbWue4x.1&omn=84134889444";
  public zoomLink: String = "https://youtube.com/live/pOWfCzxLCpo";


  canActivate(): boolean {
    this.accessService.updateNow();

    if (this.accessService.isBeforeWedding()) {
      // Antes de la boda
      return true; // Muestra página con botones controlados desde el componente
    }

    if (this.accessService.isDuringWedding()) {
      // Durante la boda
      if (this.accessService.ipIsFromSpain) {
        const now = this.accessService.now;
        if (now < this.accessService['weddingDate']) {
          this.router.navigate(['']);
        } else {        
          window.location.href = this.dotsMemoryLink.toString();
        }
      } else {
        window.location.href = this.zoomLink.toString();
      }
      return false;
    }

    // Después de la boda: redirigir siempre al álbum
    window.location.href = this.dotsMemoryLink.toString();
    return false;
  }
}
