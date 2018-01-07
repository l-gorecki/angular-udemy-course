import { Subscription } from 'rxjs/Subscription';
import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1activated = false;
  user2activated = false;

  constructor(private userServ: UsersService) {}

  ngOnInit() {
    this.userServ.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1activated = true;
        } else if (id === 2) {
          this.user2activated = true;
        }
      }
    );
  }

}
