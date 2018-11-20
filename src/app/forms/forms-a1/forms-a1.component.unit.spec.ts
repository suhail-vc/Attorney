import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsA1Component } from './forms-a1.component';
describe('FormsA1Component', () => {
  let component: FormsA1Component;
  let fixture: ComponentFixture<FormsA1Component>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsA1Component],

      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: Router},
      ]
    });
    fixture = TestBed.createComponent(FormsA1Component);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should create', () => {
    expect(component).toBeDefined();
  });
});
