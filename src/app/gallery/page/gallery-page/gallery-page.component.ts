import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GalleryHeaderComponent } from "../../components/gallery_header/gallery_header.component";

@Component({
  selector: 'app-gallery-page',
  imports: [GalleryHeaderComponent],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryPageComponent {

  isScrolled = false;

  items = Array.from({ length: 50 }, (_, i) => {
    const height = 150 + Math.floor(Math.random() * 150); // entre 150 y 300px
    return `https://picsum.photos/200/${height}?random=${i}`;
  });

  hideHeader = false;

  isCollapsed = false;

  progress = 0; // 0 = expandido, 1 = colapsado

  onScroll(event: any): void {
    const scrollTop = event.target.scrollTop;
    const maxScroll = 150; // a partir de aquí todo colapsado
    const rawProgress = scrollTop / maxScroll;
    this.progress = Math.min(1, Math.max(0, rawProgress));
  }


 }
