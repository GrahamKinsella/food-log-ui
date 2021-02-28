import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { AddFoodToMealComponent } from './add-food-to-meal/add-food-to-meal.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    AddFoodToMealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
