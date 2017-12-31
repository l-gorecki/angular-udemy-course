export class CounterService {
  changes: { inactive2active: number, active2inactive: number } = {inactive2active: 0, active2inactive: 0 };

  userActivated() {
    this.changes.inactive2active++;
  }
  userDeactivated() {
    this.changes.active2inactive++;
  }

}
