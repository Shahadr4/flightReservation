import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerDtailsComponent } from './passenger-dtails.component';

describe('PassengerDtailsComponent', () => {
  let component: PassengerDtailsComponent;
  let fixture: ComponentFixture<PassengerDtailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerDtailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerDtailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
