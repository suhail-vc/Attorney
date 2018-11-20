import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsA5Component } from './forms-a5.component';
describe('FormsA1Component', () => {
  let component: FormsA5Component;
  let fixture: ComponentFixture<FormsA5Component>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsA5Component],

      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: Router},
      ]
    });
    fixture = TestBed.createComponent(FormsA5Component);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should create', () => {
    expect(component).toBeDefined();
  });
});
