import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-image',
  standalone: true,
  imports: [GalleryImageComponent],
  templateUrl: './gallery-image.component.html',
  styleUrl: './gallery-image.component.sass'
})
export class GalleryImageComponent {
  @Input() imageData:{
    id:number,
    title:string,
    imageURL:string,
    altText:string,
    uid:number
  } = {id:0,title:"",imageURL:"", altText:"", uid:0};

  /*
    Gotta take the userID and compare that to `imageData.uid`
    Gotta implement state
  */
}
