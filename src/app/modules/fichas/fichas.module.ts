import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichasRoutingModule } from './fichas-routing.module';
import { TablaComponent } from './tabla/tabla.component';
import { MaterialModule } from 'src/app/material.module';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TablaComponent, ListadoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FichasRoutingModule
  ]
})
export class FichasModule { }
