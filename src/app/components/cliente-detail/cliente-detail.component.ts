import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.scss'],
})
export class ClienteDetailComponent implements OnInit {

  cliente: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cliente = this.route.snapshot.paramMap.get("cliente");
    console.log(this.cliente);
  }

  navegar(){
    this.router.navigateByUrl("/tabs/tab1/clientes");
  }

}
