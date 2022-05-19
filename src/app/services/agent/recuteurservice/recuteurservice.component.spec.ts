import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuteurserviceComponent } from './recuteurservice.component';

describe('RecuteurserviceComponent', () => {
  let component: RecuteurserviceComponent;
  let fixture: ComponentFixture<RecuteurserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuteurserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuteurserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
