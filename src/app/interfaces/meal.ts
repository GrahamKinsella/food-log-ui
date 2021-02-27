import { Food } from '../interfaces/food'; 
export interface Meal {
    foods: Array<Food>,
    totalCalories: number,
    totalCarbohydrates : number,
    totalProtein : number, 
    totalFat : number, 
    date : Date, 
    name: string
}
