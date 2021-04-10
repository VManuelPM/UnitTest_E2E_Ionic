import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3Page } from './tab3.page';

import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab3Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create Tab 3', () => {
    expect(component).toBeTruthy();
  });

  it('exists button Productos', () => {
    const btn = fixture.nativeElement.querySelector("#btn-productos");
    expect(btn).toBeTruthy();
  });

  it('Content match Button Productos', () => {
    const btn = fixture.nativeElement.querySelector("#btn-productos");
    expect(btn.innerHTML).toBe('Acceder a productos');
  })

  it('Button is on the right position vertically', () => {
    const container = fixture.debugElement.query(By.css('.container')).nativeElement;
    const style = getComputedStyle(container);
    expect(style.getPropertyValue("align-items")).toBe('center');
  })

  it('Button is on the right position horizontally', () => {
    const container = fixture.debugElement.query(By.css('.container')).nativeElement;
    const style = getComputedStyle(container);
    expect(style.getPropertyValue("justify-content")).toBe('center');
  })

});
