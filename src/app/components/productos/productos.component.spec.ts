import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductosComponent } from './productos.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('ProductosComponent', () => {
  let component: ProductosComponent;
  let fixture: ComponentFixture<ProductosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Exists arrow', () => {
    const arrow = fixture.nativeElement.querySelector("#atras");
    expect(arrow).toBeTruthy();
  })

  it('Exists card', () => {
    const card = fixture.nativeElement.querySelector("#card");
    expect(card).toBeTruthy();
  })

});
