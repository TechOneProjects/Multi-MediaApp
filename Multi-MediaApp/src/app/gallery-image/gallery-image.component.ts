import { Component, Input, inject } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule
} from "@angular/material/bottom-sheet"
import { GalleryImageEditFormComponent } from '../gallery-image-edit-form/gallery-image-edit-form.component';

@Component({
  selector: 'app-gallery-image',
  standalone: true,
  imports: [MatBottomSheetModule, GalleryImageEditFormComponent],
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

  editForm = inject(MatBottomSheet);

  openEditForm():void{
    this.editForm.open(GalleryImageEditFormComponent, {
      data: { id: this.imageData.id, imageURL: this.imageData.imageURL, altText: this.imageData.altText, title: this.imageData.title }
    });
  }
  /*
    Gotta take the userID and compare that to `imageData.uid`
    Gotta implement state
  */
}
