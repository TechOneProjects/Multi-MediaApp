import { HttpClient } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gallery-image-edit-form',
  standalone: true,
  imports: [],
  templateUrl: './gallery-image-edit-form.component.html',
  styleUrl: './gallery-image-edit-form.component.sass'
})
export class GalleryImageEditFormComponent {
  @Input() imageData!:{id:String, imageURL:String, altText:String};
  http = inject(HttpClient);
  endpoint = 'http://localhost:3000/gallery/'

  editImageForm:FormGroup = new FormGroup({
    title: new FormControl(""),
    imageURL: new FormControl(""),
    altText: new FormControl("")
  })
}
