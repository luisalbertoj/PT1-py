import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoriaRoutes } from './subcategoria.routing';
import { RouterModule } from '@angular/router';
import { RegistroSubCategoriaComponent } from './registro-sub-categoria/registro-sub-categoria.component';

@NgModule({
  declarations: [RegistroSubCategoriaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SubCategoriaRoutes)
  ]
})
export class SubcategoriaModule { }
