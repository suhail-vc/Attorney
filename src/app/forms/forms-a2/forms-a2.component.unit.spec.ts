import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsA2Component } from './forms-a2.component';
describe('FormsA1Component', () => {
  let component: FormsA2Component;
  let fixture: ComponentFixture<FormsA2Component>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsA2Component],

      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: Router},
      ]
    });
    fixture = TestBed.createComponent(FormsA2Component);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should create', () => {
    expect(component).toBeDefined();
  });
});
