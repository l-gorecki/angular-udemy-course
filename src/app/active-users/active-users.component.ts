import { UsersService } from './../shared/users.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private us: UsersService) {}

  onSetToInactive(id: number) {
    this.us.setInactive(id);
  }
}
