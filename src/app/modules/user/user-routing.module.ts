import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UsersResolver} from './services/resolvers/users.resolver';
import {UserResolver} from './services/resolvers/user.resolver';

const routes: Routes = [
  {
    path: '', component: UsersComponent, resolve: {users: UsersResolver}, children: [
      {path: ':id', component: UserDetailsComponent, resolve: {user: UserResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
