import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesPipesComponent } from './observables-pipes.component';

describe('ObservablesPipesComponent', () => {
  let component: ObservablesPipesComponent;
  let fixture: ComponentFixture<ObservablesPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
