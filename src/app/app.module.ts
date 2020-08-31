import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppCreateKittenComponent } from './app-create-kitten/app-create-kitten.component';
import { AppListKittenComponent } from './app-list-kitten/app-list-kitten.component';
import { AppUserKittenComponent } from './app-user-kitten/app-user-kitten.component';
import { KittensService } from './services/kittens.service';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'list', component: AppListKittenComponent },
  { path: '', component: AppListKittenComponent },
  { path: 'create', component: AppCreateKittenComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    AppCreateKittenComponent,
    AppListKittenComponent,
    AppUserKittenComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [KittensService],
  bootstrap: [AppComponent],
})
export class AppModule {}
