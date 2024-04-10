import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { GalleryHelperService } from '../services/gallery-helper.service';

@Component({
  selector: 'app-gallery-image-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './gallery-image-edit-form.component.html',
  styleUrl: './gallery-image-edit-form.component.sass'
})
export class GalleryImageEditFormComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { _id:string, imageURL:string, altText:string, title:string }) { }
  
  imageData:{_id:string, imageURL:string, altText:string, title:string} = {
    _id: this.data._id,
    imageURL: this.data.imageURL,
    altText: this.data.altText,
    title: this.data.title
  }
  
  galleryHelper = inject(GalleryHelperService);
  bottomSheetRef = inject(MatBottomSheetRef);
  editImageForm:FormGroup = new FormGroup({
    title: new FormControl(this.imageData.title),
    imageURL: new FormControl(this.imageData.imageURL),
    altText: new FormControl(this.imageData.altText)
  })
  
  
  handleSubmit(){
    const imageObj:{ title:string, imageURL:string, altText:string, _id:string } = {
      title: this.editImageForm.value.title,
      imageURL: this.editImageForm.value.imageURL,
      altText: this.editImageForm.value.altText,
      _id: this.imageData._id
    }
    this.galleryHelper.updateImage(imageObj);
    this.bottomSheetRef.dismiss();
  }

  closeElement(e: MouseEvent){
    this.bottomSheetRef.dismiss();
    e.preventDefault();
  }
}
