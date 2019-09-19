import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichasRoutingModule } from './fichas-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListaServicioComponent } from './lista-servicio/lista-servicio.component';
import { AgregarServicioComponent } from './agregar-servicio/agregar-servicio.component';

@NgModule({
  declarations: [ ListadoComponent, ClienteComponent, EmpleadoComponent, AgregarComponent, ListaServicioComponent, AgregarServicioComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FichasRoutingModule
  ]
})
export class FichasModule { }
