import { Component, OnInit } from '@angular/core';
import { ActiveUsersService } from '../services/activeUsers.service';
import { unActiveUsersService } from '../services/unActiveUsers.service';
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-user-actives',
  templateUrl: './user-actives.component.html',
  styleUrls: ['./user-actives.component.css']
})
export class UserActivesComponent implements OnInit {

  constructor(public activeUser:ActiveUsersService, public unActiveUsers: unActiveUsersService,
    private usersControl:UsersService ) { }


  ngOnInit(): void {
  }
  updateUserStatus( status: 'deactivate' | 'activate', index: number){
    if (status === 'deactivate'){
      this.usersControl.makeUserUnActive(index)
    } else if (status === 'activate'){
      this.usersControl.makeUserActive(index)
    }
  }

}
