import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabsPage } from './tabs.page';

import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Tabs', () => {
    expect(component).toBeTruthy();
  });

  it('Exists tab1 icon', () => {
    const icon = fixture.nativeElement.querySelector("#tab1-icon");
    expect(icon).toBeTruthy();
  })

  it('Exists tab2 icon', () => {
    const icon = fixture.nativeElement.querySelector("#tab2-icon");
    expect(icon).toBeTruthy();
  })

  it('Exists tab3 icon', () => {
    const icon = fixture.nativeElement.querySelector("#tab3-icon");
    expect(icon).toBeTruthy();
  })

  it('Content match tab1 icon', () => {
    const icon = fixture.nativeElement.querySelector("#tab1-icon");
    expect(icon.getAttribute("name")).toBe('person-outline');
  })

  it('Content match tab2 icon', () => {
    const icon = fixture.nativeElement.querySelector("#tab2-icon");
    expect(icon.getAttribute("name")).toBe('folder-open-outline');
  })

  it('Content match tab3 icon', () => {
    const icon = fixture.nativeElement.querySelector("#tab3-icon");
    expect(icon.getAttribute("name")).toBe('storefront-outline');
  })

  it('Content match tab1 label', () => {
    const label1 = fixture.nativeElement.querySelector("#lbl-tab1");
    expect(label1.innerHTML).toBe('Clientes');
  })

  it('Content match tab2 label', () => {
    const label2 = fixture.nativeElement.querySelector("#lbl-tab2");
    expect(label2.innerHTML).toBe('Reservas');
  })

  it('Content match tab3 icon', () => {
    const label3 = fixture.nativeElement.querySelector("#lbl-tab3");
    expect(label3.innerHTML).toBe('Productos');
  })

});
