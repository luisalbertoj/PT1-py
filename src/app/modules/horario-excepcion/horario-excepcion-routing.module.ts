import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarExcepcionComponent } from './listar-excepcion/listar-excepcion.component';
import { CrearExcepcionComponent } from './crear-excepcion/crear-excepcion.component';

const routes: Routes = [
  {path: 'horarioExcepcion', component: ListarExcepcionComponent},
  {path: 'crearExcepcion', component: CrearExcepcionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorarioExcepcionRoutingModule { }
