import { CounterService } from './shared/counter.service';
import { UsersService } from './shared/users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  userStatusChanges: {inactive2active: number, active2inactive: number };

  constructor(private us: UsersService, private counterService: CounterService) {
    this.activeUsers = this.us.activeUsers;
    this.inactiveUsers = this.us.inactiveUsers;
    this.userStatusChanges = this.counterService.changes;
  }
}
