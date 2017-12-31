import { UsersService } from './../shared/users.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private us: UsersService) {}

  onSetToActive(id: number) {
    this.us.setActive(id);
  }
}
