import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyclientsMessageComponent } from './myclients-message.component';

describe('MyclientsMessageComponent', () => {
  let component: MyclientsMessageComponent;
  let fixture: ComponentFixture<MyclientsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyclientsMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyclientsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
