import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { DestinationsPageComponent } from './destinations-page/destinations-page.component';
import { Routes, RouterModule } from '@angular/router';

const routesPages : Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: 'main-page', component: MainPageComponent},
  {path: 'destination-page', component: DestinationsPageComponent},
]

@NgModule({
  declarations: [
    MainPageComponent,
    DestinationsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesPages)
  ]
})
export class PagesModule { }
