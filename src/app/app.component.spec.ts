import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('AppComponent Integration', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule.withRoutes([
        ])
      ]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should render forms-list class', () => {
    fixture.detectChanges();
    const de = fixture.debugElement.queryAll(By.css('.forms-list input'));
    expect(de.length).toBeGreaterThanOrEqual(component.formLists.length);
  });
  it('should render nav-pills class', () => {
    fixture.detectChanges();
    const de = fixture.debugElement.queryAll(By.css('.nav-pills li'));
    expect(de.length).toBeGreaterThanOrEqual(component.pills.length);
  });
  it('should render router-outlet', () => {
    fixture.detectChanges();
    component.ngOnInit();
    const de = fixture.nativeElement.querySelector('router-outlet');
    expect(de).toBeDefined();
  });
});
