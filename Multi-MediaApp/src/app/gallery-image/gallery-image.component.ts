import { Component, Input, inject } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule
} from "@angular/material/bottom-sheet"
import { GalleryImageEditFormComponent } from '../gallery-image-edit-form/gallery-image-edit-form.component';
import { GalleryHelperService } from '../services/gallery-helper.service';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card"
import { MatDividerModule } from "@angular/material/divider"

@Component({
  selector: 'app-gallery-image',
  standalone: true,
  imports: [
    MatBottomSheetModule,
    GalleryImageEditFormComponent,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './gallery-image.component.html',
  styleUrl: './gallery-image.component.sass'
})
export class GalleryImageComponent {
  @Input() imageData:{
    _id:string,
    title:string,
    imageURL:string,
    altText:string,
    uid:string
  } = {_id:"",title:"",imageURL:"", altText:"", uid:""};
  
  galleryHelper = inject(GalleryHelperService);
  
  handleDeleteEvent():void{
    console.log(`id is ${this.imageData._id}`);
    this.galleryHelper.deleteImage(this.imageData._id);
  }

  editForm = inject(MatBottomSheet);

  openEditForm():void{
    this.editForm.open(GalleryImageEditFormComponent, {
      data: { _id: this.imageData._id, imageURL: this.imageData.imageURL, altText: this.imageData.altText, title: this.imageData.title }
    });
  }
  
}
