import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { ClientesComponent } from '../components/clientes/clientes.component';
import { ClienteDetailComponent } from '../components/cliente-detail/cliente-detail.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'clientes/:cliente',
    component: ClienteDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
