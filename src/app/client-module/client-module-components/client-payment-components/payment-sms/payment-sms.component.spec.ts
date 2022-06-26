import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSmsComponent } from './payment-sms.component';

describe('PaymentSmsComponent', () => {
  let component: PaymentSmsComponent;
  let fixture: ComponentFixture<PaymentSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
