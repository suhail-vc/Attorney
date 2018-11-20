import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsA3Component } from './forms-a3.component';
describe('FormsA1Component', () => {
  let component: FormsA3Component;
  let fixture: ComponentFixture<FormsA3Component>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsA3Component],

      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: Router},
      ]
    });
    fixture = TestBed.createComponent(FormsA3Component);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should create', () => {
    expect(component).toBeDefined();
  });
});
