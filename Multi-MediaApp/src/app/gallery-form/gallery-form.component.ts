import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GalleryHelperService } from '../services/gallery-helper.service';

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

  galleryHelper = inject(GalleryHelperService);
  
  handleSubmitNewImage(){
    this.galleryHelper.addImageToGallery({
      title:this.newImageForm.value.title,
      altText:this.newImageForm.value.altText,
      imageURL:this.newImageForm.value.imageURL
    })
    this.newImageForm.reset();
  }
}
