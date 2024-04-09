import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryHelperService implements OnInit {
  constructor() { }

  private http:HttpClient = inject(HttpClient);
  private serverAddress = 'http://localhost:3000/gallery';
  public gallery:{
    title:string,
    imageURL:string,
    altText:string,
    uid:string
    _id:string
  }[] = [];

  ngOnInit(): void {
    this.http.get(`${this.serverAddress}/`).subscribe( (res)=>{
      this.gallery = res as [];
    })
  }

  getAllGalleryData():void{
    this.http.get(this.serverAddress).subscribe( (res) => {
      this.gallery = res as [];
      console.log("Gallery is : " + this.gallery);
      console.log(this.gallery);
    }) 
  }

  addImageToGallery(data:{title:string, imageURL:string, altText:string}){
    const imageObj:{ title:string, imageURL:string, altText:string, uid:String } = {
      title: data.title,
      imageURL: data.imageURL,
      altText: data.altText,
      uid: "0"
    }
    this.http.post(`${this.serverAddress}/`, imageObj).subscribe(res => {
      this.gallery.push(res as {
        _id: string;
        uid: string;
        title: string;
        imageURL: string;
        altText: string;
      })
    })
  }
    
  updateImage(imageObj:{
    title:string,
    imageURL:string,
    altText:string,
    _id:string
  }){
    const data:{
      title:string,
      imageURL:string,
      altText:string
    } = {
      title:imageObj.title,
      imageURL:imageObj.imageURL,
      altText:imageObj.altText
    }
    
    this.http.put(`${this.serverAddress}/${imageObj._id}`, data).subscribe( (res) => {
      this.gallery = this.gallery.map( (image) => {
        if(image._id === imageObj._id){
          image = res as {
            title:string,
            imageURL:string,
            altText:string,
            _id:string,
            uid:string
          };
        }
        return image;
      })
    })
  }
  
    deleteImage(id:String):void{
      this.http.delete(`${this.serverAddress}/${id}`).subscribe( res =>{
        this.gallery = this.gallery.filter( (image:{_id:String}) => {
          if(image._id != id){
            return image;
          }
          else return null;
        })
      })
    }

}
