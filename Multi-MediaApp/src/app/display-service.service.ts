import { Injectable, inject } from '@angular/core';
import { Avatar } from './sarge-page/sarge-page-avatar.interface';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DisplayServiceService {

  displayContainer: Avatar[] = [];
  http = inject(HttpClient);



  async Read() {

    this.http.get("http://localhost:3000/avatars/read").subscribe(res => {

      this.displayContainer = (res as Avatar[])
      this.displayContainer.reverse();
      console.log(this.displayContainer);
    })


  }

  async Create(imgurl: string, promptData: FormGroup) {

    const newAvatar: Avatar = {
      _id: uuidv4(),
      name: promptData.value.name,
      img: imgurl,
      description: promptData.value.description,
      date: Date()
    }
    this.http.post("http://localhost:3000/avatars/add", newAvatar).subscribe(res => {
      console.log(res)
      this.displayContainer.push(res as Avatar)
    })
  }
  async Update(id: number, promptData: FormGroup, btn: boolean) {

    const _id = this.displayContainer[id]._id;
    console.log(_id);

    const newAvatar: Avatar = {
      _id: this.displayContainer[id]._id,
      name: promptData.value.name,
      img: this.displayContainer[id].img,
      description: promptData.value.description,
      date: Date()
    }

    console.log(newAvatar)
    this.http.put(`http://localhost:3000/avatars/${_id}/update`, newAvatar).subscribe(res => {

      this.displayContainer.map((e) => {
        if (e._id === newAvatar._id) {
          this.displayContainer[id] = newAvatar;
        }
      })
    })
    btn = false;
  }

  async Delete(id: number, existingimgUrl: string) {

    const _id = this.displayContainer[id]._id;
    console.log(_id);
    this.http.delete(`http://localhost:3000/avatars/${_id}/delete`).subscribe(res => {
      const newary: Avatar[] = this.displayContainer.filter(e => { return e._id !== _id });
      this.displayContainer = newary;
      existingimgUrl = "";
    });
  }
}
