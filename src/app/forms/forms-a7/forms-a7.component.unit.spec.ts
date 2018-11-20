import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsA7Component } from './forms-a7.component';
describe('FormsA1Component', () => {
  let component: FormsA7Component;
  let fixture: ComponentFixture<FormsA7Component>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsA7Component],

      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: Router},
      ]
    });
    fixture = TestBed.createComponent(FormsA7Component);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should create', () => {
    expect(component).toBeDefined();
  });
});
