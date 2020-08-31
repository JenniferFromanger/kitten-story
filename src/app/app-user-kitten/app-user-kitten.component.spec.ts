import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserKittenComponent } from './app-user-kitten.component';

describe('AppUserKittenComponent', () => {
  let component: AppUserKittenComponent;
  let fixture: ComponentFixture<AppUserKittenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUserKittenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUserKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
