import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { DestinationsPageComponent } from './destinations-page/destinations-page.component';
import { Routes, RouterModule } from '@angular/router';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routesPages : Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: 'main-page', component: MainPageComponent},
  {path: 'log-in-page', component: LogInPageComponent},
  {path: 'sign-up-page', component: SignUpPageComponent},
  {path: 'destination-page', component: DestinationsPageComponent},
]

@NgModule({
  declarations: [
    MainPageComponent,
    DestinationsPageComponent,
    LogInPageComponent,
    SignUpPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routesPages)
  ]
})
export class PagesModule { }
