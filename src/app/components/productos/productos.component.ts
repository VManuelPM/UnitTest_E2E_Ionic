import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  productos: string[] = ["Producto","Producto","Producto","Producto"];

  constructor(private router:Router) { }

  ngOnInit() {}

  navegar(){
    this.router.navigateByUrl("/tabs/tab3");
  }
}
