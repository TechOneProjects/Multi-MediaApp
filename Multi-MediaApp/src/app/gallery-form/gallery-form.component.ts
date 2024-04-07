import { Component } from '@angular/core';
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

  handleSubmit(){
    console.log(
      `${this.newImageForm.value.title} - Title`
    )
    console.log(
      `${this.newImageForm.value.altText} - Alt`
    )
    console.log(
      `${this.newImageForm.value.imageURL} - URL`
    )
  }
}
