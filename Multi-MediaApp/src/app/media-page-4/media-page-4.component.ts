import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ThoughtsModle } from './thought.interface';
import { DatePipe } from '@angular/common';
import { Subscription, interval } from 'rxjs';



@Component({
  selector: 'app-media-page-4',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './media-page-4.component.html',
  styleUrl: './media-page-4.component.sass'
})

export class MediaPage4Component implements OnInit, OnDestroy{
  thought: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required),
  })

  http = inject(HttpClient)
  thoughts!: any[]
  timeStamp = new Date()
  private subscription!: Subscription

  constructor() { }

  onSubmit() {
    if (this.thought.invalid) {
      return;
    }
    const thought: ThoughtsModle = {message: this.thought.value.message}
    this.http.post("http://localhost:3000/thought", thought).subscribe()
    console.log(thought)
    }

    fetchMessages() {
      this.http.get<any[]>('http://localhost:3000/thought').subscribe(messages => {
        this.thoughts = messages;
      });
    }

    ngOnInit(): void {
      this.fetchMessages()

      this.subscription = interval(1000).subscribe(() => {
        this.fetchMessages();
      });
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
      
    }

  }




