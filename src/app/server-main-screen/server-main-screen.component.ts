import { Component, OnInit } from '@angular/core';
import { Server } from '../shared/server.model';

@Component({
  selector: 'app-server-main-screen',
  templateUrl: './server-main-screen.component.html',
  styleUrls: ['./server-main-screen.component.css']
})
export class ServerMainScreenComponent implements OnInit {
  servers :Server[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  createNewServer(event: Server): void {
    this.servers.push(event);
  }

  updateServerStatus(event: {newServerStatus:'active'|'inactive'|'unknown', index:number}){
    this.servers[event.index].serverStatus = event.newServerStatus;
  }

}
