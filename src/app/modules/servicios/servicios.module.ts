import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { ServiciosRoutes } from './servicios.routing';

import { RegistroServiciosComponent } from './registro-servicios/registro-servicios.component';
import { MaterialModule } from 'src/app/material.module';
import {ClienteComponent} from './cliente/cliente.component';



@NgModule({
  declarations: [RegistroServiciosComponent, ClienteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ServiciosRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule
  ]
})
export class ServiciosModule { }
