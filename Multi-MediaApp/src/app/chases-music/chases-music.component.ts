import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chases-music',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './chases-music.component.html',
  styleUrl: './chases-music.component.sass'
})
export class ChasesMusicComponent {
  elemetnsArr: string[] = []
  
  formBuilder = inject(FormBuilder);

  trackListForm : FormGroup = this.formBuilder.group({
  })

  addElement() {
    this.elemetnsArr.push(`track${this.elemetnsArr.length + 1}`);
    this.trackListForm.addControl(`track${this.elemetnsArr.length}`, new FormControl("", Validators.required));
    console.log(this.trackListForm.value)
  }
}
