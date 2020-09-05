import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent ,children:[
    { path: 'join', loadChildren: () => import('./join/join.module').then(m => m.JoinModule) },
    { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
    { path: 'post', loadChildren: () => import('./post/post.module').then(m => m.PostModule) },
    {path:'', redirectTo:'/main/post',pathMatch:'full'}
  ]},
  
   ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
