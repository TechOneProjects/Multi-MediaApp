import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Thoughts } from "./Thoughts"


@Component({
  selector: 'app-media-page-4',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './media-page-4.component.html',
  styleUrl: './media-page-4.component.sass'
})

export class MediaPage4Component implements OnInit {
  thought: FormGroup = new FormGroup({
    message: new FormControl(null),
    image: new FormControl(null)
  })
  imageData: any;

  onSubmit() {
    this.thought.reset()
    this.imageData = null
  }

  onFileSelect(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const file = target.files[0]

      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      }

      reader.readAsDataURL(file);
  }

  }

  ngOnInit(): void {

  }


}

