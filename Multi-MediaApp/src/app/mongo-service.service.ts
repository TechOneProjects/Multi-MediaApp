import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MongoServiceService {
  constructor(private http: HttpClient) {}

  async connectToMongoDB(): Promise<any> {
    try {
      const response = await this.http.get<any>('/api/connect-mongodb')
      return response;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }
}