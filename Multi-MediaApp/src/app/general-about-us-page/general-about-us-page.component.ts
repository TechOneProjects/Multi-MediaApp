import { Component, Input } from '@angular/core';
import {MatCardModule} from "@angular/material/card"
import {MatTabsModule} from "@angular/material/tabs"

@Component({
  selector: 'app-general-about-us-page',
  standalone: true,
  imports: [MatCardModule, MatTabsModule],
  templateUrl: './general-about-us-page.component.html',
  styleUrl: './general-about-us-page.component.sass'
})
export class GeneralAboutUsPageComponent {


}
