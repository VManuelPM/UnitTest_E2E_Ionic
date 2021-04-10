import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteDetailComponent } from './cliente-detail.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('ClienteDetailComponent', () => {
  let component: ClienteDetailComponent;
  let fixture: ComponentFixture<ClienteDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteDetailComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Exists arrow', () => {
    const arrow = fixture.nativeElement.querySelector("#atras-detail");
    expect(arrow).toBeTruthy();
  })


  it('Exists home icon', () => {
    const home = fixture.nativeElement.querySelector("#home");
    expect(home).toBeTruthy();
  })
});
