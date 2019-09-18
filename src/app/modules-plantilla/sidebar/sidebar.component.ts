import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/categorias',
        title: 'Categorias',
        type: 'sub',
        icontype: 'description',
        collapse: 'categoria',
        children: [
            {path: 'registro-categorias', title: 'Registro', ab:'RC'}
        ]
    },
    {
        path: '/fichas',
        title: 'Fichas',
        type: 'sub',
        icontype: 'reorder',
        collapse: 'fichas',
        children: [
            {path: 'listado', title: 'Listado', ab:'L'},
            {path: 'agregar-ficha', title: 'Agregar ficha', ab:'AF'},
            {path: 'listado-servicios', title: 'Listado Servicios', ab:'LS'},
        ]
    },{
        path: '/sub-categorias',
        title: 'Sub Categorias',
        type: 'sub',
        icontype: 'dns',
        collapse: 'sub-categoria',
        children: [
            {path: 'registro-sub-categoria', title: 'Registro', ab:'RSC'}
        ]
    },{
        path: '/servicios',
        title: 'Servicios',
        type: 'sub',
        icontype: 'dns',
        collapse: 'servicios',
        children: [
            {path: 'registro-servicios', title: 'Nuevo Registro', ab:'RSC'}
        ]
    },{
        path: '/horarios',
        title: 'Horarios',
        type: 'sub',
        icontype: 'date_range',
        collapse: 'horarios',
        children: [
            {path: 'agenda', title: 'Agenda', ab:'A'}
        ]
    },{
        path: '/horario-excepcion',
        title: 'Excepciones de Horario',
        type: 'sub',
        icontype: 'shop',
        collapse: 'horarioExcepcion',
        children: [
            {path: 'crearExcepcion', title: 'Nueva excepcion', ab:'NE'},
            {path: 'horarioExcepcion', title: 'Lista de excepciones', ab:'HE'}
        ]
    },{
        path: '/pacientes',
        title: 'Pacientes',
        type: 'sub',
        icontype: 'dns',
        collapse: 'pacientes',
        children: [
            {path: 'registro-pacientes', title: 'Registro de pacientes', ab:'RP'}
        ]
    }
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ps: any;
    constructor (private router: Router, public userService: UserService) {}
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            this.ps = new PerfectScrollbar(elemSidebar);
        }
    }
    updatePS(): void  {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
    logOut() {
        localStorage.clear();
        this.router.navigate(['pages/login']);
    }
}
