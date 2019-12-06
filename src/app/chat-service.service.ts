import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Channel } from './interfaces/channel';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private http: HttpClient) { }
  getChannel(): Observable<Channel[]> {
    return this.http.get<Channel[]>('http://localhost:3000/channels')
  }
}
