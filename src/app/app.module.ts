import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import {MatDialogModule} from '@angular/material/dialog';
import { AppViewComponent } from './aymen/app-view/app-view.component';
import { AuthComponent } from './aymen/auth/auth.component';
import { MenuComponent } from './aymen/menu/menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {AuthServiceService} from "./aymen/service/auth-service.service";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { HomeViewComponent } from './aymen/home-view/home-view.component';
import {FormsModule} from "@angular/forms";
import { FormationHomeComponent } from './aymen/formation-home/formation-home.component';
import { ProfilComponent } from './aymen/profil/profil.component';
import {HomeService} from "./aymen/service/home.service";
import {AuthGuardService} from "./aymen/service/auth-guard.service";
import { NewFormationComponent } from './aymen/new-formation/new-formation.component';
import {MatSelectModule} from "@angular/material/select";
import { ProfFormationComponent } from './aymen/prof-formation/prof-formation.component';
import {AymenComponent} from "./aymen/aymen.component";



@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    AymenComponent,
    AppViewComponent,
    AuthComponent,
    MenuComponent,
    HomeViewComponent,
    FormationHomeComponent,
    NewFormationComponent,
    ProfFormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    CommonModule,
    MatMenuModule,
    MatButtonToggleModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [ AuthServiceService,
              HomeService,
              AuthGuardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
