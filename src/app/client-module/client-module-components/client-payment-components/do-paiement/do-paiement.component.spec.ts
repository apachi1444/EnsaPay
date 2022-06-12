import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoPaiementComponent } from './do-paiement.component';

describe('DoPaiementComponent', () => {
  let component: DoPaiementComponent;
  let fixture: ComponentFixture<DoPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoPaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
