import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-dervin',
  templateUrl: './form-dervin.component.html',
  styleUrls: ['./form-dervin.component.css']
})
export class FormDervinComponent implements OnInit {
  genders: string[] = ['Male', 'Female'];
  signForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signForm = new FormGroup({
      'username': new FormControl(null, Validators.required), 
      'email': new FormControl(null, [Validators.required, Validators.email]), 
      'gender': new FormControl('Male') 
    });
  }

  onSubmit() {
    console.log(this.signForm);
    
  }

}
