import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  template: `
    Favorite Color: <input type="text" formControlName="favoriteColorControl">
  `
})
export class ReactiveBasicComponent {
  favoriteColorControl = new FormControl('Red');


}
