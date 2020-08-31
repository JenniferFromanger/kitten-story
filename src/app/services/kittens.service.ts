import { Injectable } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { Subject } from 'rxjs';

@Injectable()
export class KittensService {
  private kittens: Kitten[] = [
    {
      id: 1,
      name: 'Princess',
      breed: 'Siamese',
      date_of_birth: '01/08/2020',
      picture:
        'https://www.woopets.fr/assets/races/000/380/og-image/siamois.jpg',
    },
    {
      id: 2,
      name: 'Magnum',
      breed: 'British Shorthair',
      date_of_birth: '08/07/2020',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiugcF7RJYaBn8RlerbsdPrP9XGKT_H3_moQ&usqp=CAU',
    },
    {
      id: 3,
      name: 'Kitty',
      breed: 'Chartreux',
      date_of_birth: '05/06/2020',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc4qeGeILW-yICKpBII8yvjC6T7Susc3KwuQ&usqp=CAU',
    },
  ];

  kittensSubject = new Subject<Kitten[]>();

  constructor() {}

  emitKitten() {
    this.kittensSubject.next(this.kittens.slice());
  }
}