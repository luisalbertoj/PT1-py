import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { RegistroReservasComponent } from './registro-reservas/registro-reservas.component';
import { ListarReservaComponent } from './listar-reserva/listar-reserva.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ClienteComponent } from './cliente/cliente.component';

@NgModule({
  declarations: [RegistroReservasComponent, ListarReservaComponent, EmpleadoComponent, ClienteComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReservasRoutingModule
  ]
})
export class ReservasModule { }
