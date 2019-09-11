import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import { CategoriaService } from '../../../services/categoria.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registro-categoria',
  templateUrl: './registro-categoria.component.html',
  styleUrls: ['./registro-categoria.component.css']
})
export class RegistroCategoriaComponent  {
  public descripcion=" ";
  public categorias = [];
  constructor(private _categoriaService: CategoriaService) {
    this.cargar();
    
  }
  cargar(){
    this._categoriaService.get().subscribe(
      (response: any) => {
        this.categorias = response.lista;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  guardar() {
    console.log(`descripcion: ${this.descripcion}`);
    let datos = {
      descripcion: this.descripcion
    };
    console.log(datos);
    this._categoriaService.create(datos).subscribe(
      (response: any) => {
        swal(
          'Ok!',
          'Peticion exitosa',
          'success'
        );
        this.cargar();
        this.descripcion = '';
      },
      (error: any) => {
        console.log(error);
      }
    );

  }
  eliminar(id){
    this._categoriaService.delete(id).subscribe(
      (response: any) => {
        swal(
          'Ok!',
          'Eliminación exitosa',
          'success'
        );
        this.cargar();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
