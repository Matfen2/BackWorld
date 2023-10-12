import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-destinations-page',
  templateUrl: './destinations-page.component.html',
  styleUrls: ['./destinations-page.component.css'],
})
export class DestinationsPageComponent {
  destinations = [
    {
      id: 1,
      image: '/assets/picts/city/italie.jpeg',
      name: 'ITALIE',
    },
    {
      id: 2,
      image: '/assets/picts/city/japon.jpeg',
      name: 'JAPON',
    },
    {
      id: 3,
      image: '/assets/picts/city/grèce.jpeg',
      name: 'GRECE',
    },
    {
      id: 4,
      image: '/assets/picts/city/norvege.jpeg',
      name: 'NORVEGE',
    },
    {
      id: 5,
      image: '/assets/picts/city/corée.jpeg',
      name: 'COREE',
    },
    {
      id: 6,
      image: '/assets/picts/city/inde.jpeg',
      name: 'INDE',
    },
    {
      id: 7,
      image: '/assets/picts/city/irlande.jpeg',
      name: 'IRLANDE',
    },
    {
      id: 8,
      image: '/assets/picts/city/londres.jpeg',
      name: 'ANGLETERRE',
    },
  ];

  person = {
    user: '',
    email: '',
    message: '',
  };

  showContact(value: NgForm) {
    console.log(value);
  }
}
