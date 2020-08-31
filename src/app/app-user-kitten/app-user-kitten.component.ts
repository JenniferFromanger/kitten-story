import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { KittensService } from '../services/kittens.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './app-user-kitten.component.html',
  styleUrls: ['./app-user-kitten.component.scss'],
})
export class AppUserKittenComponent implements OnInit {
  @Input() kitten: Kitten;

  myKittens: Kitten[];
  constructor(private kittensService: KittensService) {}

  ngOnInit() {
    this.myKittens = this.kittensService.myKittens;
  }
}
