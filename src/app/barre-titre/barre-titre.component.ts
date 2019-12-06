import { Component, OnInit } from '@angular/core';
import {ChatServiceService} from '../chat-service.service';
import {Channel} from '../interfaces/channel';

@Component({
  selector: 'app-barre-titre',
  templateUrl: './barre-titre.component.html',
  styleUrls: ['./barre-titre.component.css']
})
export class BarreTitreComponent implements OnInit {

  constructor(private chatService: ChatServiceService ) {
    channels: Channel[] = [];

  }

  ngOnInit() {
    this.chatService.getChannel().subscribe(
      (channel: Channel[]) => this.channel = channel
    )
  }

}
