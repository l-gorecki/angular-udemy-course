import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paragraphVisible = false;
  buttonClicks = [];
  toggleButton() {
    this.paragraphVisible = !this.paragraphVisible;
    this.buttonClicks.push(new Date());
  }
}
