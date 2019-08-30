import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SubCategoriaRoutes } from './subcategoria.routing';

import { RegistroSubCategoriaComponent } from './registro-sub-categoria/registro-sub-categoria.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [RegistroSubCategoriaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SubCategoriaRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule
  ]
})
export class SubcategoriaModule { }
