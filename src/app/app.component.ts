import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedMenuItem = 'recipe';

  onMenuSelected(menu: string) {
    this.selectedMenuItem = menu;
  }
}
