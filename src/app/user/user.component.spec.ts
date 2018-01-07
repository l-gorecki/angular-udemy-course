import { DataService } from './../shared/data.service';
import { UserService } from './user.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create user component', () => {
    expect(component).toBeTruthy();
  });

  it('should use username from service', () => {
    const userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('should display username if user is logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(component.user.name);
    expect(component.isLoggedIn).toBe(true);
  });

  it('shouldn\'t display username if user is not logged in', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(component.user.name);
    expect(component.isLoggedIn).toBe(false);
  });

  it('shouldn\'t fetch data successfully if not called async', () => {
    const dataService = fixture.debugElement.injector.get(DataService);
    const spy = spyOn(dataService, 'getDetails') // listen whenever dataservice.getDetails is fired and return fake data
      .and.returnValue(Promise.resolve('Fake Data'));
    fixture.detectChanges();
    expect(component.data).toBe(undefined);
  });

  it('should fetch data successfully if called async', async(() => {
    const dataService = fixture.debugElement.injector.get(DataService);
    const spy = spyOn(dataService, 'getDetails') // listen whenever dataservice.getDetails is fired and return fake data
      .and.returnValue(Promise.resolve('Fake Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.data).toBe('Fake Data');
    });
  }));
});
