import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementProviderComponent } from './paiement-provider.component';

describe('PaiementProviderComponent', () => {
  let component: PaiementProviderComponent;
  let fixture: ComponentFixture<PaiementProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
