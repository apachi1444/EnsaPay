import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGreenComponent } from './header-green.component';

describe('HeaderGreenComponent', () => {
  let component: HeaderGreenComponent;
  let fixture: ComponentFixture<HeaderGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
