import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import swal from 'sweetalert2';
import { FactoryService } from 'src/app/services/factory.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-registro-categoria',
  templateUrl: './registro-categoria.component.html',
  styleUrls: ['./registro-categoria.component.css']
})
export class RegistroCategoriaComponent  {
  public descripcion=" ";
  public categorias = [];
  public categoriastamanio = [];
  public paginacion = 1;
  constructor(private _factory: FactoryService) {
    // this.cargar(1);
    this._factory.get('persona', 'idPersona', 'asc', 1, 10, '{"nombre":"Gustavo"}').subscribe(
      (response: any) => {
        console.log('elemento filtrado');
        console.log(response);
      }
    );
  }
  cargar(pagina: number){
    this.paginacion = pagina;
    this._factory.get('categoria', 'idCategoria', 'asc', this.paginacion, 10).subscribe(
      (response: any) => {
        console.log(response);
        this.categorias = response.lista;
        for (let index = 0; index < Math.trunc(response.totalDatos/10)+1; index++) {
          this.categoriastamanio[index] = index*10;
        }
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
    this._factory.create('categoria',datos).subscribe(
      (response: any) => {
        swal(
          'Ok!',
          'Peticion exitosa',
          'success'
        );
        this.cargar(this.paginacion);
        this.descripcion = '';
      },
      (error: any) => {
        console.log(error);
      }
    );

  }
  eliminar(id){
    this._factory.delete('categoria',id).subscribe(
      (response: any) => {
        swal(
          'Ok!',
          'Eliminación exitosa',
          'success'
        );
        this.cargar(this.paginacion);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  actualizar(id) {
    console.log($('#'+id).val() );
    let data= {
      idCategoria: id,
      descripcion:$('#'+id).val() 
    };
    console.log(data);
    this._factory.update('categoria', data).subscribe(
      (response:any) => {
        swal(
          'Ok!',
          'Actualizacion exitosa',
          'success'
        );
        console.log(response);
      }
    );
  }
}
