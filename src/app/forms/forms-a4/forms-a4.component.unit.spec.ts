import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsA4Component } from './forms-a4.component';
describe('FormsA1Component', () => {
  let component: FormsA4Component;
  let fixture: ComponentFixture<FormsA4Component>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsA4Component],

      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: Router},
      ]
    });
    fixture = TestBed.createComponent(FormsA4Component);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should create', () => {
    expect(component).toBeDefined();
  });
});
