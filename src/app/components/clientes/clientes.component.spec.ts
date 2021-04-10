import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesComponent } from './clientes.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('ClientesComponent', () => {
  let component: ClientesComponent;
  let fixture: ComponentFixture<ClientesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesComponent);
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

  
  it('Exists btn detail', () => {
    const btn = fixture.nativeElement.querySelector("#btn-detail");
    expect(btn).toBeTruthy();
  })


});
