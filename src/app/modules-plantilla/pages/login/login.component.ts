import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import swal from'sweetalert2';

declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})


export class LoginComponent implements OnInit, OnDestroy {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    public user: User = new User;

    constructor(private element: ElementRef, public authService: AuthService, private _userService: UserService,
        private router: Router, private route: ActivatedRoute) {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['categorias']);
        } else {
            this.nativeElement = element.nativeElement;
            this.sidebarVisible = false;
        }
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;

    }

    ngOnInit() {

        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        body.classList.remove('off-canvas-sidebar');
    }
    login() {
        console.log(`user: ${this.user.username}`);
        this._userService.login().subscribe(
            (response: any) => {
                console.log(response.lista);
                for (let index = 0; index < response.lista.length; index++) {
                    const _user = response.lista[index];
                    if (_user.usuarioLogin === this.user.username) {
                        localStorage.setItem('user', JSON.stringify(_user));
                        this.router.navigate(['categorias']);
                        return true;
                    }
                }
                swal(
                    'Usuario no encontrado!',
                    'Revisa que el nombre de usuario sea correcto!',
                    'error'
                  );
                return false;
            }
        );
    }
}