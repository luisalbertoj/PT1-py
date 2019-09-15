import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuard } from './services/auth-guard.service';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }, {
      path: '',
      component: AdminLayoutComponent,
      canActivate: [AuthGuard],
      children: [
          {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
    }, {
        path: 'forms',
        loadChildren: './forms/forms.module#Forms'
    }, {
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
    }, {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
    }, {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
    }, {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
    }, {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    }, {
        path: '',
        loadChildren: './userpage/user.module#UserModule'
    }, {
        path: '',
        loadChildren: './timeline/timeline.module#TimelineModule'
    },
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
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];
