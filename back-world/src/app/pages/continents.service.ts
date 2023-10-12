import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContinentsService {
  continents = [
    {
      id: 1,
      pict: '/assets/picts/continents/ameriqueDuNord.jpeg',
    },
    {
      id: 2,
      pict: '/assets/picts/continents/ameriqueDuSud.jpg',
    },
    {
      id: 3,
      pict: '/assets/picts/continents/europe.jpeg',
    },
    {
      id: 4,
      pict: '/assets/picts/continents/asieImg1.jpeg',
    },
    {
      id: 5,
      pict: '/assets/picts/continents/afriqueDuSud.jpeg',
    },
    {
      id: 6,
      pict: '/assets/picts/continents/australie.jpeg',
    },
  ];

  constructor() {}
}
