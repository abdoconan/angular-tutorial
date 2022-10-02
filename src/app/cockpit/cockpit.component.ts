import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated =  new EventEmitter();
  @Output() blueprintCreated = new EventEmitter();

  serverName = '';
  serverContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  createServer() {
    console.log(this.serverName)
    this.serverCreated.emit({
      name: this.serverName,
      content: this.serverContent,
      type: 'server'
    })
  }

  createBlueprint() { 
    this.serverCreated.emit({
      name: this.serverName,
      content: this.serverContent,
      type: 'blueprint'
    })

  }

}
