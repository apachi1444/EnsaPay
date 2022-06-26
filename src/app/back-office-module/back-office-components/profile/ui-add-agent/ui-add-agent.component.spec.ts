import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAddAgentComponent } from './ui-add-agent.component';

describe('UiAddAgentComponent', () => {
  let component: UiAddAgentComponent;
  let fixture: ComponentFixture<UiAddAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiAddAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiAddAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
