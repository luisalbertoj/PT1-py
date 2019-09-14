import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedpluginModule} from './shared/fixedplugin/fixedplugin.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

import { AppRoutes } from './app.routing';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { SubcategoriaModule } from './modules/subcategoria/subcategoria.module';
import { ServiciosModule } from './modules/servicios/servicios.module';
import { MaterialModule } from './material.module';



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
