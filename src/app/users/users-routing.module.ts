import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUserComponent } from './presentation/pages/page-user/page-user.component';
import { UserComponent } from './presentation/views/user/user.component';

const routes: Routes = [
  {path: 'list', component: PageUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
