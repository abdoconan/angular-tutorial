import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  @Input('inputedNumber') newNumber: number;

  constructor() { }

  ngOnInit(): void {
  }
  getOffEvenStatus() {
    return this.newNumber % 2 === 0 ? 'Even' :  'Odd';
  }

}
