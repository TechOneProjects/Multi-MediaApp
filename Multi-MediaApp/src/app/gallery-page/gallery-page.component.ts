import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GalleryImageComponent } from '../gallery-image/gallery-image.component';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [InfiniteScrollModule, GalleryImageComponent],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.sass',
})
export class GalleryPageComponent implements OnInit {
  http = inject(HttpClient);
  serverAddress = 'http://localhost:3000/gallery';

  galleryData: {
    id: number;
    uid: number;
    title: string;
    imageURL: string;
    altText: string;
  }[] = [];
  renderIndex: number = 0;
  renderedGalleryData: {
    id: number;
    uid: number;
    title: string;
    imageURL: string;
    altText: string;
  }[] = [];

  addImagesToRender() {
    let addCount = 0;
    const imagesToAdd: any[] = this.galleryData.slice(
      this.renderIndex,
      this.galleryData.length - 1
    );
    for (let imageData of imagesToAdd) {
      console.log(imageData);
      this.renderedGalleryData.push(imageData);
      addCount++;
      this.renderIndex++;
      if (addCount >= 9) {
        break;
      }
    }
  }

  ngOnInit(): void {
    this.http.get(this.serverAddress).subscribe((data) => {
      this.galleryData = data as [];
      console.log(this.galleryData);
      this.addImagesToRender();
    });
  }

  onScrolled(e: any) {
    if(this.renderedGalleryData.length > 0){
      console.log("scrolled!!");
      this.addImagesToRender();
    }
  }
}
