import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariosRoutingModule } from './horarios-routing.module';
import { AgendaComponent } from './agenda/agenda.component';

@NgModule({
  declarations: [AgendaComponent],
  imports: [
    CommonModule,
    HorariosRoutingModule
  ]
})
export class HorariosModule { }
