import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-handeling',
  templateUrl: './form-handeling.component.html',
  styleUrls: ['./form-handeling.component.css'],
})
export class FormHandelingComponent implements OnInit {
  @ViewChild('f') inputedFrom: NgForm;
  // genders: string[] = ['Male', 'Female'];
  subsecriptionTypes: string[] = ['Advanced', 'Custom', 'Default'];

  user: {
    email: string;
    password: string;
    subsecribtion: 'Advanced' | 'Custom' | 'Default';
  };

  constructor() {}

  ngOnInit(): void {}

  // userNameSuggest() {
  //   // this.inputedFrom.setValue({
  //   //   userName: 'SuperUser',
  //   //   userEmail: this.inputedFrom.value.userEmail,
  //   //   Secret: this.inputedFrom.value.Secret,
  //   //   gender: this.inputedFrom.value.gender,
  //   // });
  //   this.inputedFrom.form.patchValue({
  //     userName: 'SuperUser',
  //   });
  // }

  // submitted(form: NgForm): void {
  //   console.log(form);
  // }
  // submitted() {
  //   // console.log(this.inputedFrom);
  //   this.inputedFrom.reset();
  // }

  Submitted() {
    if (this.inputedFrom.valid) {
      this.user = {
        email: this.inputedFrom.value.Email,
        password: this.inputedFrom.value.Password,
        subsecribtion: this.inputedFrom.value.subsecribtion,
      };
      this.inputedFrom.reset();
    }
  }
}
