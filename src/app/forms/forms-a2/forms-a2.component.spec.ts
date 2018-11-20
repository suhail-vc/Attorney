import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsA2Component } from './forms-a2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
describe('FormsA2Component Integration', () => {
  let component: FormsA2Component;
  let fixture: ComponentFixture<FormsA2Component>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsA2Component],
      imports: [
        ReactiveFormsModule, FormsModule,
        RouterTestingModule.withRoutes([
        ])
      ]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormsA2Component);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should render form title', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const h4 = bannerElement.querySelector('h4');
    expect(h4.textContent).toEqual('Form A2');
  });
  it('should render Full Name label', () => {
    const de = fixture.debugElement.queryAll(By.css('.form-group > label'));
    expect(de[0].nativeElement.textContent).toEqual('Full Name');
  });
  it('should render Contact Number label', () => {
    const de = fixture.debugElement.queryAll(By.css('.form-group > label'));
    expect(de[1].nativeElement.textContent).toEqual('Contact Number');
  });
  it('should render Gender label', () => {
    const de = fixture.debugElement.queryAll(By.css('.form-group > label'));
    expect(de[2].nativeElement.textContent).toEqual('Gender');
  });
});
