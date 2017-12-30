import { Recipe } from './../recipe';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedRL = new EventEmitter<Recipe>();

  recipeList: Recipe[] = [
    new Recipe('Test', 'test description', 'https://www.campbellsoup.co.uk/img/recipes/24-campbells-baked-stuffed-peppers-recipe.jpg')
    new Recipe('Test2', 'test2 description', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeItem: Recipe) {
    this.recipeSelectedRL.emit(recipeItem);
  }
}
