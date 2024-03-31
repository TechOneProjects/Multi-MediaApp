import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MongoServiceService } from './mongo-service.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent{
  title = 'Multi-MediaApp';
 
  constructor(private mongoService: MongoServiceService){}

  async connectMongoDB(): Promise<void>{
    try{
        const result = await this.mongoService.connectToMongoDB()
        console.log('MongoDB connection result:', result);
    }catch(err){
      console.error('Error connecting to MongoDB:', err);
    }
  }
}
