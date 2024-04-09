import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Output, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-gallery-image-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './gallery-image-edit-form.component.html',
  styleUrl: './gallery-image-edit-form.component.sass'
})
export class GalleryImageEditFormComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { _id:String, imageURL:String, altText:String, title:String }) { }
  
  imageData:{_id:String, imageURL:String, altText:String, title:String} = {
    _id: this.data._id,
    imageURL: this.data.imageURL,
    altText: this.data.altText,
    title: this.data.title
  }
  
  http = inject(HttpClient);
  bottomSheetRef = inject(MatBottomSheetRef);
  endpoint:String = `http://localhost:3000/gallery/${this.imageData._id}`
  editImageForm:FormGroup = new FormGroup({
    title: new FormControl(this.imageData.title),
    imageURL: new FormControl(this.imageData.imageURL),
    altText: new FormControl(this.imageData.altText)
  })
  
  
  handleSubmit(){
    const imageObj:{ title:string, imageURL:string, altText:string } = {
      title: this.editImageForm.value.title,
      imageURL: this.editImageForm.value.imageURL,
      altText: this.editImageForm.value.altText,
    }
    this.http.put(`${this.endpoint}`, imageObj).subscribe( res=>{
      console.log(res);
      this.bottomSheetRef.dismiss();
    })
  }

  @Output() deleteMeEvent:EventEmitter<String> = new EventEmitter<String>;
  handleDelete(){
    this.http.delete(`${this.endpoint}`).subscribe( res =>{
      console.log("deleted this one");
      this.deleteMeEvent.emit(this.imageData._id);
    })
  }

  closeElement(e: MouseEvent){
    this.bottomSheetRef.dismiss();
    e.preventDefault();
  }
}
