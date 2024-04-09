import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GalleryImageComponent } from '../gallery-image/gallery-image.component';
import { GalleryFormComponent } from '../gallery-form/gallery-form.component';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [/* InfiniteScrollModule, */ GalleryImageComponent, GalleryFormComponent],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.sass',
})
export class GalleryPageComponent implements OnInit {
  http = inject(HttpClient);
  serverAddress = 'http://localhost:3000/gallery';

  galleryData: {
    _id: string;
    uid: string;
    title: string;
    imageURL: string;
    altText: string;
  }[] = [];
  
  // renderedGalleryData: {
  //   id: number;
  //   uid: number;
  //   title: string;
  //   imageURL: string;
  //   altText: string;
  // }[] = [];
  // renderIndex: number = 0;
  // addImagesToRender() {
  //   let addCount = 0;
  //   const imagesToAdd: any[] = this.galleryData.slice(
  //     this.renderIndex,
  //     this.galleryData.length - 1
  //   );
  //   for (let imageData of imagesToAdd) {
  //     console.log(imageData);
  //     this.renderedGalleryData.push(imageData);
  //     addCount++;
  //     this.renderIndex++;
  //     if (addCount >= 9) {
  //       break;
  //     }
  //   }
  // }

  sendDataToServer(data:{title:string, imageURL:string, altText:string}){
    const imageObj:{ title:string, imageURL:string, altText:string, uid:Number } = {
      title: data.title,
      imageURL: data.imageURL,
      altText: data.altText,
      uid: 0
    }
    this.http.post(`${this.serverAddress}/`, imageObj).subscribe(res => {
      console.log(res);
      this.galleryData.push(res as {
        _id: string;
        uid: string;
        title: string;
        imageURL: string;
        altText: string;
      })
    })
  }

  deleteImage(id:String):void{
    this.http.delete(`${this.serverAddress}/${id}`).subscribe( res =>{
      this.galleryData = this.galleryData.filter( (image) => {
        if(image._id != id){
          return image;
        }
        else return null;
      })
    })
  }

  ngOnInit(): void {
    this.http.get(this.serverAddress).subscribe((data) => {
      console.log(data);
      this.galleryData = data as [];
    });
  }

  onScrolled(e: any) {
    if(this.galleryData.length > 0){
      console.log("scrolled!!");
      // this.addImagesToRender();
    }
  }
}
