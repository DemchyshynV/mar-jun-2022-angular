import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';


const routes:Routes = [
  {
    path:'', component:MainLayoutComponent, children:[
      {path:'users', loadChildren:()=>import('./modules/user/user.module').then(value => value.UserModule)},
      {path:'posts', loadChildren:()=>import('./modules/post/post.module').then(value => value.PostModule)}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
