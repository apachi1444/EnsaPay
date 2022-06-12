import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPaginationComponent } from './agent-pagination.component';

describe('AgentPaginationComponent', () => {
  let component: AgentPaginationComponent;
  let fixture: ComponentFixture<AgentPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
