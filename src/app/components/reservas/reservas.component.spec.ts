import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservasComponent } from './reservas.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('ReservasComponent', () => {
  let component: ReservasComponent;
  let fixture: ComponentFixture<ReservasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservasComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservasComponent);
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
