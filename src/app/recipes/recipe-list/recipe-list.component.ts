import { Recipe } from './../recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[] = [
    new Recipe('Test', 'test description', 'https://www.campbellsoup.co.uk/img/recipes/24-campbells-baked-stuffed-peppers-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
