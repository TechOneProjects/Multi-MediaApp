import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gallery-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './gallery-form.component.html',
  styleUrl: './gallery-form.component.sass'
})
export class GalleryFormComponent {
  newImageForm:FormGroup = new FormGroup({
    title: new FormControl(""),
    imageURL: new FormControl(""),
    altText: new FormControl("")
  })
  
  @Output() sendFormData:EventEmitter<{title:string, imageURL:string, altText:string}> = new EventEmitter<{title:string, imageURL:string, altText:string}>

  handleSubmit(){
    this.sendFormData.emit({
      title: this.newImageForm.value.title,
      imageURL: this.newImageForm.value.imageURL,
      altText: this.newImageForm.value.altText
    })
  }
}
