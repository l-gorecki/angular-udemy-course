import { LoggingService } from './../shared/logging.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService] // every instance of component now creates new instance of service
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logger: LoggingService, private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    this.accountsService.statusUpdated.emit(status);
  }
}
