import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsA6Component } from './forms-a6.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
describe('FormsA6Component Integration', () => {
  let component: FormsA6Component;
  let fixture: ComponentFixture<FormsA6Component>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsA6Component],
      imports: [
        ReactiveFormsModule, FormsModule,
        RouterTestingModule.withRoutes([
        ])
      ]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormsA6Component);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should render form title', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const h4 = bannerElement.querySelector('h4');
    expect(h4.textContent).toEqual('Form A6');
  });
  it('should render Company Name label', () => {
    const de = fixture.debugElement.queryAll(By.css('.form-group > label'));
    expect(de[0].nativeElement.textContent).toEqual('Company Name');
  });
  it('should render Date label', () => {
    const de = fixture.debugElement.queryAll(By.css('.form-group > label'));
    expect(de[1].nativeElement.textContent).toEqual('Date');
  });
  it('should render Form Category label', () => {
    const de = fixture.debugElement.queryAll(By.css('.form-group > label'));
    expect(de[2].nativeElement.textContent).toEqual('Form Category');
  });
});
