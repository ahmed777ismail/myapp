import { Component } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  homeFriends: string[] = [];
  dataRecipes: any[] = [];
  constructor(private _ApidataService: ApidataService) {
    this._ApidataService.getPizzza().subscribe((data) => {
      this.dataRecipes = data.recipes;
    });
  }
}
