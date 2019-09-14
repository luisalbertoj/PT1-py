import { Routes } from '@angular/router';
import { RegistroServiciosComponent } from './registro-servicios/registro-servicios.component';



export const ServiciosRoutes: Routes = [

    {
        path: '',
        children: [ { 
            path: 'registro-servicios',
            component: RegistroServiciosComponent
        }]
    }
];
