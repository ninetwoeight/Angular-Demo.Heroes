import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {PageNotfoundComponent} from './page-notfound/page-notfound.component';

const routes: Routes= [
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'heroes',component:HeroesComponent},
    {path:'details/:id',component:HeroDetailComponent},
    {path:'**',component:PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule {}