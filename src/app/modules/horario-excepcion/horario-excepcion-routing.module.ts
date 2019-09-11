import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorarioExcepcionComponent } from './horario-excepcion/horario-excepcion.component';

const routes: Routes = [
  {path: 'horarioExcepcion', component: HorarioExcepcionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorarioExcepcionRoutingModule { }
