import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from '../Authentication/login/login.component';

@NgModule({
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
