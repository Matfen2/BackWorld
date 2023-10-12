import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { DestinationsPageComponent } from './destinations-page/destinations-page.component';
import { Routes, RouterModule } from '@angular/router';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { CountryDirective } from './country.directive';
import { CountryPageComponent } from './country-page/country-page.component';

const routesPages : Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: 'main-page', component: MainPageComponent},
  {path: 'log-in-page', component: LogInPageComponent},
  {path: 'sign-up-page', component: SignUpPageComponent},
  {path: 'destination-page', component: DestinationsPageComponent},
  {path: 'country-page/:id', component: CountryPageComponent},
]

@NgModule({
  declarations: [
    MainPageComponent,
    DestinationsPageComponent,
    LogInPageComponent,
    SignUpPageComponent,
    CountryDirective,
    CountryPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routesPages)
  ]
})
export class PagesModule { }
