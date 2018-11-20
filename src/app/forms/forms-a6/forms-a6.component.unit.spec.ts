import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsA6Component } from './forms-a6.component';
describe('FormsA1Component', () => {
  let component: FormsA6Component;
  let fixture: ComponentFixture<FormsA6Component>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsA6Component],

      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: Router},
      ]
    });
    fixture = TestBed.createComponent(FormsA6Component);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should create', () => {
    expect(component).toBeDefined();
  });
});
