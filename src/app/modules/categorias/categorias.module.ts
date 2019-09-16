import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroCategoriaComponent } from './registro-categoria/registro-categoria.component';
import { CategoriaRoutes } from './categorias.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [RegistroCategoriaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CategoriaRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CategoriasModule { }
