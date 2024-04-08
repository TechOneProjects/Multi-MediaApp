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
  @Input() imageData!:{id:String, imageURL:String, altText:String, title:String};
  http = inject(HttpClient);
  endpoint:String = `http://localhost:3000/gallery/${this.imageData.id}`

  editImageForm:FormGroup = new FormGroup({
    title: new FormControl(""),
    imageURL: new FormControl(""),
    altText: new FormControl("")
  })

  handleSubmit(){
    const imageObj:{ title:string, imageURL:string, altText:string } = {
      title: this.editImageForm.value.title,
      imageURL: this.editImageForm.value.imageURL,
      altText: this.editImageForm.value.altText,
    }
    this.http.put(`${this.endpoint}`, imageObj).subscribe( res=>{
      console.log(res);
    })
  }
  handleDelete(){
    this.http.delete(`${this.endpoint}`).subscribe( res =>{
      console.log("deleted this one");
    })
  }
}
