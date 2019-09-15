import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { RegistroPacienteComponent } from './registro-pacientes/registro-pacientes.component';
import { ActualizarPacientesComponent } from './actualizar-pacientes/actualizar-pacientes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistroPacienteComponent, ActualizarPacientesComponent],
  imports: [
    CommonModule,
    FormsModule,
    PacientesRoutingModule
  ]
})
export class PacientesModule { }
