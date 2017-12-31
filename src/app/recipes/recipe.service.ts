import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  public selectedRecipe = new EventEmitter<Recipe>();
  private recipeList: Recipe[] = [
    new Recipe('Test',
                'test description',
                'https://www.campbellsoup.co.uk/img/recipes/24-campbells-baked-stuffed-peppers-recipe.jpg',
                [
                  new Ingredient('Meat', 1),
                  new Ingredient('Seasoning', 20),
                  new Ingredient('Bread', 1),
                ])
    new Recipe('Test2',
                'test2 description',
                'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
                [
                  new Ingredient('Meat', 3),
                  new Ingredient('Tomato', 4),
                  new Ingredient('Cheese', 1),
                ])
  ];


  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipeList.slice(); // slice to return new array instead of reference
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
