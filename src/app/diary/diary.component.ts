import { Component, OnInit } from '@angular/core';
import { Meal } from '../interfaces/meal';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

   Meals: any[] = [
  {mealName: 'Breakfast'},
  {mealName: 'Lunch'},
  {mealName: 'Dinner'},
  {mealName: 'Snacks'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
