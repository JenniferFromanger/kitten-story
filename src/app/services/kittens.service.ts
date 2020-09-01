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
      picture:
        'https://www.woopets.fr/assets/races/000/380/og-image/siamois.jpg',
      date_of_birth: '01/08/2020',
    },
    {
      id: 2,
      name: 'Magnum',
      breed: 'British Shorthair',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiugcF7RJYaBn8RlerbsdPrP9XGKT_H3_moQ&usqp=CAU',
      date_of_birth: '08/07/2020',
    },
    {
      id: 3,
      name: 'Kitty',
      breed: 'Chartreux',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc4qeGeILW-yICKpBII8yvjC6T7Susc3KwuQ&usqp=CAU',
      date_of_birth: '05/06/2020',
    },
    {
      id: 4,
      name: 'Love',
      breed: 'Bengal',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzNkQLV07T6V-wbFpMhWykH1HtS0LXj7-DVg&usqp=CAU',
      date_of_birth: '21/07/2020',
    },
    {
      id: 5,
      name: 'Fripouille',
      breed: 'Persian',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1LIHwPtSzT5w4wXL4EJEU2Pij9GYo3_1cbA&usqp=CAU',
      date_of_birth: '02/08/2020',
    },
    {
      id: 6,
      name: 'Enzo',
      breed: 'Chartreux',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThRipNqiFWRQvV0-5H2ee5qhR7IS6RWcwI1w&usqp=CAU',
      date_of_birth: '05/06/2020',
    },
  ];

  kittensSubject = new Subject<Kitten[]>();

  myKittens = [];
  constructor() {}

  emitKitten() {
    this.kittensSubject.next(this.kittens.slice());
  }

  adoptKitten(kitten: Kitten) {
    kitten.id = this.myKittens.length + 1;
    this.myKittens.push(kitten);
    const KittenIndexToRemove = this.kittens.findIndex((kittenElement) => {
      if (kittenElement === kitten) {
        return true;
      }
    });
    this.kittens.splice(KittenIndexToRemove, 1);
    this.emitKitten();
  }

  createNewKitten(newKitten: Kitten) {
    this.kittens.push(newKitten);
    this.emitKitten();
  }

  getKittenId() {
    return this.kittens.length + 1;
  }
}
