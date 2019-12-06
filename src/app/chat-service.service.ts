import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Channel} from './interfaces/channel';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor() { }
  getChannel(): Observable<Channel[]> {
    return this.h.get<Channel[]>('http://localhost:4200')
  }
}
