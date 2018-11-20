import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsA4Component } from './forms-a4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
describe('FormsA4Component Integration', () => {
  let component: FormsA4Component;
  let fixture: ComponentFixture<FormsA4Component>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsA4Component],
      imports: [
        ReactiveFormsModule, FormsModule,
        RouterTestingModule.withRoutes([
        ])
      ]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormsA4Component);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should render form title', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const h4 = bannerElement.querySelector('h4');
    expect(h4.textContent).toEqual('Form A4');
  });
  it('should render First Name label', () => {
    const de = fixture.debugElement.queryAll(By.css('.form-group > label'));
    expect(de[0].nativeElement.textContent).toEqual('First Name');
  });
  it('should render Last Name label', () => {
    const de = fixture.debugElement.queryAll(By.css('.form-group > label'));
    expect(de[1].nativeElement.textContent).toEqual('Last Name');
  });
  it('should render Address label', () => {
    const de = fixture.debugElement.queryAll(By.css('.form-group > label'));
    expect(de[2].nativeElement.textContent).toEqual('Address');
  });
});
