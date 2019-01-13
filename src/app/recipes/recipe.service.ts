import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Super tasty schnitzel', 'https://toriavey.com/images/2011/02/IMG_1544.jpg', [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Hamburger', 'What else would you eat?', 'https://previews.123rf.com/images/cookelma/cookelma1508/cookelma150800038/43961068-tasty-and-appetizing-hamburger-cheeseburger.jpg', [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1),
            new Ingredient('Tomato', 1),
            new Ingredient('Salad', 1)
        ])
      ]; 
    
      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);

      }
}