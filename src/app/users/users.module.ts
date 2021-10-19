import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PageUserComponent } from './presentation/pages/page-user/page-user.component';
import { UserComponent } from './presentation/views/user/user.component';


@NgModule({
  declarations: [
    PageUserComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    PageUserComponent
  ]
})
export class UsersModule { }
