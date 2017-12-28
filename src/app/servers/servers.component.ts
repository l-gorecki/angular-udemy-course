import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serversCreated = 0;
  serverName = '';

  constructor() {
    setTimeout(() => { this.allowNewServer = true; } , 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serversCreated++;
    this.serverCreationStatus = this.serversCreated + ' server(s) was created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
