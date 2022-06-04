import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementParReferenceComponent } from './paiement-par-reference.component';

describe('PaiementParReferenceComponent', () => {
  let component: PaiementParReferenceComponent;
  let fixture: ComponentFixture<PaiementParReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementParReferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementParReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
