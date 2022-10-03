import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { GameControlComponent } from './game-control/game-control.component';
import { NumbersComponent } from './game-control/numbers/numbers.component';
import { AddServerComponent } from './server-main-screen/add-server/add-server.component';
import { ServerMainScreenComponent } from './server-main-screen/server-main-screen.component';
import { ServerObjectComponent } from './server-main-screen/server-object/server-object.component';
import { UserActivesComponent } from './user-actives/user-actives.component';
import { ActiveUsersService } from './services/activeUsers.service';
import { UsersService } from './services/user.service';
import { unActiveUsersService } from './services/unActiveUsers.service';
import { FormHandelingComponent } from './form-handeling/form-handeling.component';
import { FormDervinComponent } from './form-dervin/form-dervin.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    GameControlComponent,
    NumbersComponent,
    AddServerComponent,
    ServerMainScreenComponent,
    ServerObjectComponent,
    UserActivesComponent,
    FormHandelingComponent,
    FormDervinComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [ActiveUsersService, unActiveUsersService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
