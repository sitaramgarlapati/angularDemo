import { Component } from '@angular/core';

@Component({
  selector: 'app-template-favorite-color',
  template: `
  <form #basicForm="ngForm">
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor">
</form>
  `
})
export class TemplateDrivenBasicComponent {
  favoriteColor = 'red';
}
