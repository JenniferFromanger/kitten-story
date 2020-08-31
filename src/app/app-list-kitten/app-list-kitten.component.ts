import { Component, OnInit, OnDestroy } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { Subscription } from 'rxjs';
import { KittensService } from '../services/kittens.service';

@Component({
  selector: 'app-app-list-kitten',
  templateUrl: './app-list-kitten.component.html',
  styleUrls: ['./app-list-kitten.component.scss'],
})
export class AppListKittenComponent implements OnInit, OnDestroy {
  kittens: Kitten[];
  kittensSubscription: Subscription;

  constructor(private kittensService: KittensService) {}

  ngOnInit() {
    this.kittensSubscription = this.kittensService.kittensSubject.subscribe(
      (kittens: Kitten[]) => {
        this.kittens = kittens;
      }
    );
    this.kittensService.emitKitten();
  }

  ngOnDestroy() {
    this.kittensSubscription.unsubscribe();
  }
}
