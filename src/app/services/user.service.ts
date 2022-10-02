import { Injectable } from "@angular/core";
import { ActiveUsersService } from "./activeUsers.service";
import { unActiveUsersService } from "./unActiveUsers.service";

@Injectable()
export class UsersService {
    constructor(private activeUsers:ActiveUsersService, private unActiveUsers:unActiveUsersService) {
        
    }
    makeUserUnActive(index: number){
        let newUnActiveUser:string =  this.activeUsers.activeUsers[index];
        this.activeUsers.activeUsers.splice(index, 1);
        this.unActiveUsers.unActiveUsers.push(newUnActiveUser);
    }

    makeUserActive(index: number){
        let newUnActiveUser:string =  this.unActiveUsers.unActiveUsers[index];
        this.unActiveUsers.unActiveUsers.splice(index, 1);
        this.activeUsers.activeUsers.push(newUnActiveUser);
    }
}