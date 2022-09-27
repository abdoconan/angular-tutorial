import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = []


  onCreateServer(event: {name: string; content: string; type: string;}){
    this.servers.push({
      name: event.name,
      content: event.content,
      type: event.type
    });

  }

  onCreatBlueprint(event: {name: string; content: string; type: string;}){
    this.servers.push({
      name: event.name,
      content: event.content,
      type: event.type
    });
  }

  serverDelete (event: number) {
    console.log(event);
    this.servers.splice(event, 1);
  }
}
