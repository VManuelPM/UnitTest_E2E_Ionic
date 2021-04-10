import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2Page } from './tab2.page';

import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create Tab 2', () => {
    expect(component).toBeTruthy();
  });

  
  it('exists button Reservas', () => {
    const btn = fixture.nativeElement.querySelector("#btn-reservas");
    expect(btn).toBeTruthy();
  });

  it('Content match Button Reservas', () => {
    const btn = fixture.nativeElement.querySelector("#btn-reservas");
    expect(btn.innerHTML).toBe('Acceder a reservas');
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
