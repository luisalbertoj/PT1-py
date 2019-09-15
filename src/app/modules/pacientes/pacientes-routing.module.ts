import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroPacienteComponent } from './registro-pacientes/registro-pacientes.component';
import { ActualizarPacientesComponent } from './actualizar-pacientes/actualizar-pacientes.component';

const routes: Routes = [{path: 'registro-pacientes', component: RegistroPacienteComponent}, 
                        {path: 'actualizar-pacientes/:id', component: ActualizarPacientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
