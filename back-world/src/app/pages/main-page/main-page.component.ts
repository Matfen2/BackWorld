import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  person = {
    user: '',
    email: '',
    message: '',
  };

  showContact(value: NgForm) {
    console.log(value);
  }
}
