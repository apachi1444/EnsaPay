import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruteurInscrComponent } from './recruteur-inscr.component';

describe('RecruteurInscrComponent', () => {
  let component: RecruteurInscrComponent;
  let fixture: ComponentFixture<RecruteurInscrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruteurInscrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruteurInscrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
