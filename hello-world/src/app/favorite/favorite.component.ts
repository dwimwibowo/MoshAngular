import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isSelected?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("Favorite: " + this.isSelected);
    this.isSelected = !this.isSelected;
  }
}
