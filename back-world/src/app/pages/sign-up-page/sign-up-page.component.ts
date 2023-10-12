import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent {
  inscribe: string = '';

  person = {
    pseudo: '',
    email: '',
    password: '',
    phone: '',
  };

  showInscribe(enter: NgForm) {
    console.log(enter);
  }
}
