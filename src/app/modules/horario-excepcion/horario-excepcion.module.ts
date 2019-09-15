import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorarioExcepcionRoutingModule } from './horario-excepcion-routing.module';
import { ListarExcepcionComponent } from './listar-excepcion/listar-excepcion.component';
import { CrearExcepcionComponent } from './crear-excepcion/crear-excepcion.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListarExcepcionComponent, CrearExcepcionComponent],
  imports: [
    CommonModule,
    HorarioExcepcionRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class HorarioExcepcionModule { }
