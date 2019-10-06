import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe('Steak','Using this recipe you can create a steak ','https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwizq7672IflAhVLP48KHYohBj0QjRx6BAgBEAQ&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ARecipe_logo.jpeg&psig=AOvVaw0Cw9zyQNn4BZgYqROD10gU&ust=1570453265173836'),
                      new Recipe('Rib Eye','Using this recipe you can create a rib eye','https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwizq7672IflAhVLP48KHYohBj0QjRx6BAgBEAQ&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ARecipe_logo.jpeg&psig=AOvVaw0Cw9zyQNn4BZgYqROD10gU&ust=1570453265173836')];



  
  
  constructor() { }

  ngOnInit() {
  }

}
