import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './modules-plantilla/layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './modules-plantilla/layouts/auth/auth-layout.component';
import { AuthGuard } from './services/auth-guard.service';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'categorias',
      pathMatch: 'full',
    }, {
      path: '',
      component: AdminLayoutComponent,
      canActivate: [AuthGuard],
      children: [
    {
        path: 'categorias',
        loadChildren: './modules/categorias/categorias.module#CategoriasModule'
    },
    {
        path: 'sub-categorias',
        loadChildren: './modules/subcategoria/subcategoria.module#SubcategoriaModule'
    },
    {
        path: 'servicios',
        loadChildren: './modules/servicios/servicios.module#ServiciosModule'
    },
    {
        path: 'horarios',
        loadChildren: './modules/horarios/horarios.module#HorariosModule'
    },
    {
        path: 'fichas',
        loadChildren: './modules/fichas/fichas.module#FichasModule'
    }
    ,{
        path: 'pacientes',
        loadChildren: './modules/pacientes/pacientes.module#PacientesModule'
    },{
        path: 'reservas',
        loadChildren: './modules/reservas/reservas.module#ReservasModule'
    },
    {
        path: 'horario-excepcion',
        loadChildren: './modules/horario-excepcion/horario-excepcion.module#HorarioExcepcionModule'
    }
  ]}, {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './modules-plantilla/pages/pages.module#PagesModule'
      }]
    }
];
