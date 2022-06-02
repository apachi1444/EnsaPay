import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruteurLoginComponent } from './recruteur-login.component';

describe('RecruteurLoginComponent', () => {
  let component: RecruteurLoginComponent;
  let fixture: ComponentFixture<RecruteurLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruteurLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruteurLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
