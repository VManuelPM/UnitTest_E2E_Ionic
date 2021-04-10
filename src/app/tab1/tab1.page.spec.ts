import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1Page } from './tab1.page';

import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create Tab1', () => {
    expect(component).toBeTruthy();
  });

  it('exists button Clientes', () => {
    const btn = fixture.nativeElement.querySelector("#btn-clientes");
    expect(btn).toBeTruthy();
  });

  it('Content match Button Clientes', () => {
    const btn = fixture.nativeElement.querySelector("#btn-clientes");
    expect(btn.innerHTML).toBe('Acceder a Clientes');
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
