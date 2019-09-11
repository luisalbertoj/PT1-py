import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorarioExcepcionRoutingModule } from './horario-excepcion-routing.module';
import { HorarioExcepcionComponent } from './horario-excepcion/horario-excepcion.component';

@NgModule({
  declarations: [HorarioExcepcionComponent],
  imports: [
    CommonModule,
    HorarioExcepcionRoutingModule
  ]
})
export class HorarioExcepcionModule { }
