import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Server } from 'src/app/shared/server.model';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {
  @ViewChild('formAddName') selectedName:ElementRef;
  @ViewChild('formAddSelected') selectedChoice:ElementRef;
  @Output('newServerCreated') newServerCreated :EventEmitter<Server> =  new EventEmitter();
  isFormValid:boolean = true;
  

  constructor() { }

  ngOnInit(): void {
  }

  addSever(){
    if (this.selectedChoice.nativeElement.value !== '' && this.selectedName.nativeElement.value !== ''){
      this.isFormValid =  true;
      this.newServerCreated.emit(new Server(this.selectedName.nativeElement.value, this.selectedChoice.nativeElement.value));
    }
    else{
      this.isFormValid =  false;
    }
    
  }

}
