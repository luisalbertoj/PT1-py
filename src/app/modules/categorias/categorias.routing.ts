import { Routes } from '@angular/router';
import { RegistroCategoriaComponent } from './registro-categoria/registro-categoria.component';


export const CategoriaRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: 'registro-categorias',
            component:  RegistroCategoriaComponent
        }]
    }
];
