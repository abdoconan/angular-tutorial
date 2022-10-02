import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Server } from 'src/app/shared/server.model';

@Component({
  selector: 'app-server-object',
  templateUrl: './server-object.component.html',
  styleUrls: ['./server-object.component.css']
})
export class ServerObjectComponent implements OnInit {
  @Input('nServer') nServer:Server;
  @Input('nServerIndex') Index:number;
  @Output('newStatus') newStatus:EventEmitter<{newServerStatus:'active'|'inactive'|'unknown', index:number}> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateServerStatus(status:'active'|'inactive'|'unknown'){
    if (status !== this.nServer.serverStatus){
      this.newStatus.emit({
        newServerStatus: status, 
        index: this.Index
      });

    }
  }

}
