import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: Router, useValue: router},
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should create', () => {
    expect(component).toBeDefined();
  });
  it('should add item to pills', () => {
    const pillsPreviousLength =  component.pills.length;
    const evt = {
      'target': {
        'checked': true,
        'name': 'A2',
        'id': 'd6b143b2-ebd3-11e8-8eb2-f2801f1b9fd1'
      }
    };
    component.addForm(evt);
    expect(component.pills.length).toBeGreaterThan(pillsPreviousLength);
  });
  it('should remove item to pills', () => {
    const pillsPreviousLength =  component.pills.length;
    const evt = {
      'target': {
        'checked': false,
        'name': 'A2',
        'id': 'd6b143b2-ebd3-11e8-8eb2-f2801f1b9fd1'
      }
    };
    component.addForm(evt);
    expect(component.pills.length).toBeLessThan(pillsPreviousLength);
  });
});
