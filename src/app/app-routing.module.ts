import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppViewComponent} from "./aymen/app-view/app-view.component";
import {HomeViewComponent} from "./aymen/home-view/home-view.component";
import {ProfilComponent} from "./aymen/profil/profil.component";
import {AuthGuardService} from "./aymen/service/auth-guard.service";
import {NewFormationComponent} from "./aymen/new-formation/new-formation.component";

const routes: Routes = [
  { path:'formation',canActivate:[AuthGuardService],component:HomeViewComponent},
  { path:'',component:AppViewComponent},
  { path:'New',canActivate:[AuthGuardService],component:NewFormationComponent},
  { path:'profil',canActivate:[AuthGuardService],component:ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
