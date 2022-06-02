import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBackOfficesComponent } from './list-back-offices.component';

describe('ListBackOfficesComponent', () => {
  let component: ListBackOfficesComponent;
  let fixture: ComponentFixture<ListBackOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBackOfficesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBackOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
