import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HorariosRoutingModule } from './horarios-routing.module';
import { AgendaComponent } from './agenda/agenda.component';


@NgModule({
  declarations: [AgendaComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    HorariosRoutingModule
  ]
})
export class HorariosModule { }
