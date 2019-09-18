import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { RegistroReservasComponent } from './registro-reservas/registro-reservas.component';
import { ListarReservaComponent } from './listar-reserva/listar-reserva.component';

@NgModule({
  declarations: [RegistroReservasComponent, ListarReservaComponent],
  imports: [
    CommonModule,
    ReservasRoutingModule
  ]
})
export class ReservasModule { }
