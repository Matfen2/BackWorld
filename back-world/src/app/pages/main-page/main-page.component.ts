import { Component } from '@angular/core';
import { ContinentsService } from '../continents.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  listContinents: Array<any>;

  constructor(private continentsServices: ContinentsService) {
    this.listContinents = continentsServices.continents;
  }
}
