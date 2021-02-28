import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodToMealComponent } from './add-food-to-meal.component';

describe('AddFoodToMealComponent', () => {
  let component: AddFoodToMealComponent;
  let fixture: ComponentFixture<AddFoodToMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFoodToMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodToMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
