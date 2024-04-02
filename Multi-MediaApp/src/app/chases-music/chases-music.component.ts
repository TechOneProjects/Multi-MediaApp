import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Album } from './album.interface';
import { AlbumDisplayComponent } from '../album-display/album-display.component';

@Component({
  selector: 'app-chases-music',
  standalone: true,
  imports: [ReactiveFormsModule, AlbumDisplayComponent],
  templateUrl: './chases-music.component.html',
  styleUrl: './chases-music.component.sass'
})
export class ChasesMusicComponent implements OnInit{
  elemetnsArr: string[] = [];
  albumArr: Album[] = [];
  
  formBuilder = inject(FormBuilder);

  trackListForm : FormGroup = this.formBuilder.group({
  })

  addElement() {
    this.elemetnsArr.push(`track${this.elemetnsArr.length + 1}`);
    this.trackListForm.addControl(`track${this.elemetnsArr.length}`, new FormControl("", Validators.required));
    console.log(this.trackListForm.value)
  }

  async fetchDiscogs():Promise<void> {
    try {
      const response = await fetch("https://api.discogs.com/users/cforlini/collection/folders/0/releases", {
        headers: {
          "Authorization": "Discogs key=wTPpJsCySNodlbLlmBsP, secret=RwsRavuQuLPLnIruuDDptdhAKmHIHcYy"
        }});
        const data = await response.json();
        this.albumArr = data.releases;
        console.log(this.albumArr)
    } catch (e) {
      console.log(e);
    }
  }

  ngOnInit(): void {
    this.fetchDiscogs();
  }
}
