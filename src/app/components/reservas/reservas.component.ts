import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
})
export class ReservasComponent implements OnInit {

  reservas: string[] = ["Reserva","Reserva","Reserva","Reserva"];

  constructor(private router: Router) { }

  ngOnInit() {}

  navegar(){
    this.router.navigateByUrl("/tabs/tab2");
  }

}
