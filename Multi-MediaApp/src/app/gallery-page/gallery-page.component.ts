import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [InfiniteScrollModule],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.sass'
})
export class GalleryPageComponent {
  http = inject(HttpClient);

  onScrolled(e:any){
    console.log(e);
  }
}
