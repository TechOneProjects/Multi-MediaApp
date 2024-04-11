import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit, inject } from '@angular/core';
import { GalleryImageComponent } from '../gallery-image/gallery-image.component';
import { GalleryFormComponent } from '../gallery-form/gallery-form.component';
import { GalleryHelperService } from '../services/gallery-helper.service';


@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [ GalleryImageComponent, GalleryFormComponent ],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.sass',
})
export class GalleryPageComponent implements OnInit, DoCheck {
  http = inject(HttpClient);
  galleryHelper = inject(GalleryHelperService);
  serverAddress = 'http://localhost:3000/gallery';
  token:string | null = null;

  scrollPanel:HTMLElement | null = document.getElementById("");
  scrollPanelIsAnimated:boolean = true;
  gallery:{
    title:string,
    imageURL:string,
    altText:string,
    uid:string
    _id:string
  }[] = this.galleryHelper.gallery

  ngOnInit(): void {
    this.galleryHelper.getAllGalleryData();
    this.scrollPanel = document.getElementById("scrolling-gallery");
    this.token = localStorage.getItem("token");
    console.log(this.token)

    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
      this.beginScrollPanelAnimation();
    }
  }

  ngDoCheck(): void {
    if(this.gallery.length != this.galleryHelper.gallery.length * 2){
      this.updateRenderList();
    }
    if(this.gallery.slice(0, this.galleryHelper.gallery.length) != this.galleryHelper.gallery){
      this.updateRenderList();
    }
  }
  
  updateRenderList():void{
    this.gallery = [...this.galleryHelper.gallery];
    this.galleryHelper.gallery.forEach( (item) => {
      const duplicatedItem = {...item};
      this.gallery.push(duplicatedItem);
    })
  }

  beginScrollPanelAnimation():void{
    this.scrollPanel?.setAttribute("data-animated", "true");
  }
}
