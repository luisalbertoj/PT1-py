import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  {path: 'tabla', component: TablaComponent},
  {path: 'listado', component: ListadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichasRoutingModule { }
