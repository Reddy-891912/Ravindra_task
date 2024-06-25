import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialStageComponent } from './initial-stage.component';

describe('InitialStageComponent', () => {
  let component: InitialStageComponent;
  let fixture: ComponentFixture<InitialStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
