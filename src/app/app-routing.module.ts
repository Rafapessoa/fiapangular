import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListPage } from './pages/UserList/UserList.page'
import { UserPage } from './pages/User/User.pages';

const routes: Routes = [
  {   path: 'userlist' , component: UserListPage},
  {   path: 'user/:id' , component: UserPage},
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
