import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClient } from '@angular/common/http';
import { Avatar } from "../sarge-page/sarge-page-avatar.interface"
import { v4 as uuidv4 } from 'uuid';
import data from "../../../Avatars.json";
``




@Component({
  selector: 'app-sarge-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatDividerModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './sarge-page.component.html',
  styleUrl: './sarge-page.component.scss'
})
export class SargePageComponent {
  hairColor: string = "";
  eyeColor: string = "";
  skinColor: string = "";
  height: string = "";
  bodyType: string = "";
  race: string = "";
  gender: string = "";
  prompt: string = "";
  name: string = "";
  description: string = "";
  genimgUrl: string = "";
  existingimgUrl: string = "";
  displayLoaded: boolean = false;
  imgLoading: boolean = false;
  updBtn: boolean = false;
  displayContainer: Avatar[] = [];


  promptData: FormGroup = new FormGroup({
    hairColor: new FormControl('', Validators.required),
    eyeColor: new FormControl('', Validators.required),
    height: new FormControl('', Validators.required),
    bodyType: new FormControl('', Validators.required),
    race: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    prompt: new FormControl('')
  })

  http = inject(HttpClient);


  async Read() {

    this.http.get("http://localhost:3000/sargepage/avatars/read").subscribe(res => {

      this.displayContainer = res as Avatar[];
      this.displayContainer.reverse();
    })

    console.log(this.displayContainer);
  }
  async Create(imgurl: string) {

    const newAvatar: Avatar = {
      _id: uuidv4(),
      name: this.promptData.value.name,
      img: imgurl,
      description: this.promptData.value.description,
      date: Date()
    }
    console.log(newAvatar)

    this.http.post("http://localhost:3000/sargepage/avatars/add", newAvatar).subscribe(res => {
      console.log(res)
      
      //localStorage.setItem("token", JSON.stringify(res))
    })
  }
  async Delete(id: number) {

    const _id = this.displayContainer[id]._id;
    console.log(_id);
    this.http.delete(`http://localhost:3000/sargepage/avatars/${_id}/delete`).subscribe(res => {
    });
    
  }
  ImgClick(id: number) {

    const _id = this.displayContainer[id]._id;
    console.log(_id);
    this.genimgUrl="";
    this.existingimgUrl = this.displayContainer[id].img;
    this.imgLoading = false;
    this.updBtn = true;


  }
  async Update(id: number) {

    const _id = this.displayContainer[id]._id;
    console.log(_id);

    const newAvatar: Avatar = {
      _id: this.displayContainer[id]._id,
      name: this.promptData.value.name,
      img: this.displayContainer[id].img,
      description: this.promptData.value.description,
      date: Date()
    }

    console.log(newAvatar)
    this.http.put(`http://localhost:3000/sargepage/avatars/${_id}/update`, newAvatar).subscribe(res => {
    })
    this.updBtn = false;
  }
  async LoadImage() {

    this.imgLoading = true;
    this.existingimgUrl="";
    const url = "https://api.openai.com/v1/images/generations";
    const API_KEY = "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";
    const options = {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "dall-e-3",
        "prompt": this.prompt,
        "n": 1,
        "size": "1024x1024"
      })
    }
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    this.genimgUrl = data.data[0].url;
    this.imgLoading = false;


  }
  Reset() {

  }
  onRaceChange(event: any) {
    this.race = event.target.value;
    this.setPrompt();

  }
  onGenderChange(event: any) {
    this.gender = event.target.value;
    this.setPrompt();
  }
  onHairChange(event: any) {
    this.hairColor = event.target.value;
    this.setPrompt();
  }
  onPromptChange(event: any) {
    this.prompt = event.target.value;

  }
  onEyeChange(event: any) {
    this.eyeColor = event.target.value;
    this.setPrompt();
  }
  onHeightChange(event: any) {
    this.height = event.target.value;
    this.setPrompt();
  }
  onBodyTypeChange(event: any) {
    this.bodyType = event.target.value;
    this.setPrompt();
  }
  onNameChange(event: any) {
    this.name = event.target.value;

  }
  onDescriptionChange(event: any) {
    this.description = event.target.value;

  }
  setPrompt() {
    this.prompt = "a " +
      this.race + " " + this.gender + " with " +
      this.hairColor + " hair and " +
      this.eyeColor + " eyes " + "who is " +
      this.height + " tall with " +
      this.bodyType + " build";
  }
}
