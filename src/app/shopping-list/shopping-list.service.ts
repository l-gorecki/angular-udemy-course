import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 15),
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingr: Ingredient) {
    this.ingredients.push(ingr);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingrs: Ingredient[]) {
    this.ingredients.push(...ingrs);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
