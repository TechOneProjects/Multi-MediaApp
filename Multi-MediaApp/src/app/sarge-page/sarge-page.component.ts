import { Component, OnInit, inject } from '@angular/core';
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

import { DisplayServiceService } from '../display-service.service';
import { SargeAboutMeComponent } from '../sarge-about-me/sarge-about-me.component';



@Component({
  selector: 'app-sarge-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, SargeAboutMeComponent, MatProgressSpinnerModule, MatDividerModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './sarge-page.component.html',
  styleUrl: './sarge-page.component.sass'
})
export class SargePageComponent implements OnInit {

  displayService = inject(DisplayServiceService);

  ngOnInit(): void {
    this.displayService.Read();

  }

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






  ImgClick(id: number) {

    const _id = this.displayService.displayContainer[id]._id;
    this.genimgUrl = "";
    this.existingimgUrl = this.displayService.displayContainer[id].img;
    this.imgLoading = false;
    this.updBtn = true;
    this.promptData.value.name = this.displayService.displayContainer[id].name;
    this.promptData.value.description = this.displayService.displayContainer[id].description;

  }

  async LoadImage() {

    this.imgLoading = true;
    this.existingimgUrl = "";
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

    this.genimgUrl = data.data[0].url;
    this.imgLoading = false;
    this.promptData.reset();
    this.promptData.controls["message"].setErrors(null)

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
