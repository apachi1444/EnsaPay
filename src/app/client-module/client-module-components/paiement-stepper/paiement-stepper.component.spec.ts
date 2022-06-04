import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementStepperComponent } from './paiement-stepper.component';

describe('PaiementStepperComponent', () => {
  let component: PaiementStepperComponent;
  let fixture: ComponentFixture<PaiementStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
