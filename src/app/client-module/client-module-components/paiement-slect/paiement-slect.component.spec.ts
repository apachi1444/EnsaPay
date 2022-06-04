import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementSlectComponent } from './paiement-slect.component';

describe('PaiementSlectComponent', () => {
  let component: PaiementSlectComponent;
  let fixture: ComponentFixture<PaiementSlectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementSlectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementSlectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
