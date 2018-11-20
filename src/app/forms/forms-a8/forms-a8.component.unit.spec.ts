import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsA8Component } from './forms-a8.component';
describe('FormsA1Component', () => {
  let component: FormsA8Component;
  let fixture: ComponentFixture<FormsA8Component>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsA8Component],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: Router }
      ]
    });
    fixture = TestBed.createComponent(FormsA8Component);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should create', () => {
    expect(component).toBeDefined();
  });
});
