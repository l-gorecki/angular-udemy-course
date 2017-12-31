import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipes();
  }
}
