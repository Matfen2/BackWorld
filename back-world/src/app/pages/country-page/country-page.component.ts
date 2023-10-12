import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css'],
})
export class CountryPageComponent implements OnInit {
  countryId! : number;
  countryDetails: any;

  countryData = [
    {
      id: 1,
      pict: '/assets/picts/city/italie.jpeg',
      title: 'ITALIE',
      continent: 'EUROPE',
      describe: 'Italie est connue pour Venise, Rome et Milan',
      firstCityPict: '/assets/picts/city/italie.jpeg',
      secondCityPict: '/assets/picts/city/italie.jpeg',
      thirdCityPict: '/assets/picts/city/italie.jpeg',
      firstCityName: 'ROME',
      secondCityName: 'VENISE',
      thirdCityName: 'MILAN',
    }
  ]

  constructor (private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.countryId =+ params['id'];
      this.countryDetails = this.countryData.find((destination) => destination.id === this.countryId)
    })
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
