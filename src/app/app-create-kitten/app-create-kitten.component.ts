import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KittensService } from '../services/kittens.service';
import { Kitten } from '../models/kitten.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './app-create-kitten.component.html',
  styleUrls: ['./app-create-kitten.component.scss'],
})
export class AppCreateKittenComponent implements OnInit {
  kittenForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private kittensService: KittensService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.kittenForm = this.formBuilder.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      picture: ['', Validators.required],
    });
  }

  onSaveKitten() {
    const name = this.kittenForm.get('name').value;
    const breed = this.kittenForm.get('breed').value;
    const date_of_birth = this.kittenForm.get('date_of_birth').value;
    const picture = this.kittenForm.get('picture').value;
    const id = this.kittensService.getKittenId();
    const newKitten = new Kitten(id, name, breed, date_of_birth, picture);
    this.kittensService.createNewKitten(newKitten);
    this.router.navigate(['/list']);
  }
}
