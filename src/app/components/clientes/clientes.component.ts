import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {

  clientes: string[] = ["Juan","Pedro","Lucas","Mateo","Santiago"]

  constructor(private router:Router) { }

  ngOnInit() {}

  navegar(){
    this.router.navigateByUrl("/tabs/tab1");
  }

  detalle(cliente){
    console.log(cliente);
    this.router.navigateByUrl(`/tabs/tab1/clientes/${cliente}`);
  }
}
