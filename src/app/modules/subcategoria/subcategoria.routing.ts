import { Routes } from '@angular/router';
import { RegistroSubCategoriaComponent } from './registro-sub-categoria/registro-sub-categoria.component';



export const SubCategoriaRoutes: Routes = [

    {
        path: '',
        children: [ { 
            path: 'registro-sub-categoria',
            component: RegistroSubCategoriaComponent
          
        }]
    }
];
