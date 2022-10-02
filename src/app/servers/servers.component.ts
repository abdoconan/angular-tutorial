import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  showDetails: boolean;
  buttonClicked: number[];
  
  constructor() { 
    this.showDetails =  false;
    this.buttonClicked = []
  }

  ngOnInit(): void {
  }

  changeDetails(): void {
    this.showDetails = !this.showDetails;
    this.buttonClicked.push(1);
  }


}
