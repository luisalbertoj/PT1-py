import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HorariosRoutingModule } from './horarios-routing.module';
import { AgendaComponent } from './agenda/agenda.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AgendaComponent, EmpleadoComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    HorariosRoutingModule,
    MaterialModule
  ]
})
export class HorariosModule { }
