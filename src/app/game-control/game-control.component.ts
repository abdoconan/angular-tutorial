import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  numbers: number[] = [];
  interval;

  constructor() { }

  ngOnInit(): void {
  }

  startInterval() {
    this.interval = setInterval(() =>{
      this.numbers.push(Math.floor(Math.random() * 1000))
    }, 2000);
  }
  deleteInterval() {
    if (this.interval) {
      clearInterval(this.interval);
      this.numbers = []
    }

  }

}
