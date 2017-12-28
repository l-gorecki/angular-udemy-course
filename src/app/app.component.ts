import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = '';

  isEmpty(candidate) {
    return candidate.length === 0;
  }

  onReset() {
    this.user = '';
  }

}
