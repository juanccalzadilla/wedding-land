import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gallery-header',
  imports: [],
  templateUrl: './gallery_header.component.html',
  styleUrl: './gallery_header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryHeaderComponent { }
