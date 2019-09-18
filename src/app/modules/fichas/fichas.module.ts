import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichasRoutingModule } from './fichas-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';

@NgModule({
  declarations: [ ListadoComponent, ClienteComponent, EmpleadoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FichasRoutingModule
  ]
})
export class FichasModule { }
