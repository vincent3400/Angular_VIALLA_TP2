import { Component, OnInit } from '@angular/core';
import {ChatServiceService} from "../chat-service.service";
import {Channel} from "../interfaces/channel";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  channels: Channel[] = [];
  constructor(private chatService: ChatServiceService ) {


  }

  ngOnInit() {
    this.chatService.getChannel().subscribe(
      (channel: Channel[]) => this.channels = channel
    )
  }

}
