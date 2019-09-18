import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListaServicioComponent } from './lista-servicio/lista-servicio.component';

const routes: Routes = [
  {path: 'listado', component: ListadoComponent},
  {path: 'agregar-ficha', component: AgregarComponent},
  {path: 'listado-servicios', component: ListaServicioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichasRoutingModule { }
