import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css'],
})
export class LogInPageComponent {
  connect: string = '';

  person = {
    pseudo: '',
    password: '',
  };

  showConnect(enter: NgForm) {
    console.log(enter);
  }
}
