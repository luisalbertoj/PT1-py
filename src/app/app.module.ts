import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';

import { SidebarModule } from './modules-plantilla/sidebar/sidebar.module';
import { AdminLayoutComponent } from './modules-plantilla/layouts/admin/admin-layout.component';
import { FooterModule } from './modules-plantilla/shared/footer/footer.module';
import { NavbarModule} from './modules-plantilla/shared/navbar/navbar.module';
import { FixedpluginModule} from './modules-plantilla/shared/fixedplugin/fixedplugin.module';
import { AuthLayoutComponent } from './modules-plantilla/layouts/auth/auth-layout.component';


import { AppRoutes } from './app.routing';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { SubcategoriaModule } from './modules/subcategoria/subcategoria.module';
import { ServiciosModule } from './modules/servicios/servicios.module';
import { MaterialModule } from './material.module';
import { PacientesModule } from './modules/pacientes/pacientes.module';
import { ReservasModule } from './modules/reservas/reservas.module';



@NgModule({
    imports:      [
        HttpClientModule,
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        RouterModule.forRoot(AppRoutes,{
          useHash: true
        }),
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedpluginModule,
        CategoriasModule,
        SubcategoriaModule,
        PacientesModule,
        ReservasModule,
        ServiciosModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
