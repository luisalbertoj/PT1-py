import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroReservasComponent } from './registro-reservas/registro-reservas.component';
import { ListarReservaComponent } from './listar-reserva/listar-reserva.component';

const routes: Routes = [{path: 'registro-reservas', component: RegistroReservasComponent}, 
                        {path: 'listar-reserva', component: ListarReservaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
