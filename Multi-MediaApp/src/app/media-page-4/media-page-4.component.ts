import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ThoughtsModle } from './thought.interface';
import { ReplyModel } from './reply.interface';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import jwt_decode from 'jwt-decode';





@Component({
  selector: 'app-media-page-4',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, MatButtonModule,MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule],
  templateUrl: './media-page-4.component.html',
  styleUrl: './media-page-4.component.sass'
})

export class MediaPage4Component implements OnInit, OnDestroy{
  thought: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required),
  })
  reply: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required),
  })

  http = inject(HttpClient)
  thoughts!: any[]
  activeThought: any
  private subscription!: Subscription
  username!: any

  constructor() { }

  onSubmit() {
    if (this.thought.invalid) {
      return;
    }
    const thought: ThoughtsModle = { username: localStorage.getItem("username"), message: this.thought.value.message, replies: []}
    this.http.post("http://localhost:3000/thought", thought).subscribe()
    setTimeout(() => { this.fetchMessages() }, 500)
    console.log(thought)
    this.thought.reset()
    this.thought.controls["message"].setErrors(null)

    
    }

    fetchMessages() {
      this.http.get<any[]>('http://localhost:3000/thought').subscribe(messages => {
        this.thoughts = messages;
      });
    }

    setActiveThought(message: any) {
      this.activeThought = message;
    }

    replyToMessage() {
      if (this.reply.valid && this.activeThought) {
        const message: ReplyModel = { username: localStorage.getItem("username"), message: this.reply.value.message} 
        this.http.post(`http://localhost:3000/thought/${this.activeThought._id}/replies`, message).subscribe(() => {
          this.fetchMessages();
          this.reply.reset();
          this.activeThought = null;
          console.log(message)
        });
      }
    }

    deleteMessage(messageId: string) {
      this.http.delete(`http://localhost:3000/thought/${messageId}`).subscribe(() => {
        this.fetchMessages();
      });
    }

    deleteReply(messageId: string, replyId: string) {
      this.http.delete(`http://localhost:3000/thought/${messageId}/replies/${replyId}`).subscribe(() => {
          this.fetchMessages();
      });
  }

    ngOnInit(): void {
      this.fetchMessages()

    }
    


    ngOnDestroy(): void {
      this.subscription.unsubscribe();
      
    }

  }




