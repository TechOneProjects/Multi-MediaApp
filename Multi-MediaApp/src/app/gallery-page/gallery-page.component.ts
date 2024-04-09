import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GalleryImageComponent } from '../gallery-image/gallery-image.component';
import { GalleryFormComponent } from '../gallery-form/gallery-form.component';
import { GalleryHelperService } from '../services/gallery-helper.service';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [/* InfiniteScrollModule, */ GalleryImageComponent, GalleryFormComponent],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.sass',
})
export class GalleryPageComponent implements OnInit {
  http = inject(HttpClient);
  galleryHelper = inject(GalleryHelperService);
  serverAddress = 'http://localhost:3000/gallery';

  ngOnInit(): void {
    this.galleryHelper.getAllGalleryData();
  }

  onScrolled(e: any) {
    // if(this.galleryData.length > 0){
    //   console.log("scrolled!!");
      // this.addImagesToRender();
    // }
  }
}
