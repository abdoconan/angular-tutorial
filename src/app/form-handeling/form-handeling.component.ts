import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-handeling',
  templateUrl: './form-handeling.component.html',
  styleUrls: ['./form-handeling.component.css']
})
export class FormHandelingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitted(form: NgForm): void {
    console.log(form);
  }

}
