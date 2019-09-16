import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import swal from 'sweetalert2';
import { FactoryService } from 'src/app/services/factory.service';
import * as $ from 'jquery';
import { Subcategoria } from 'src/app/models/subcategoria';

@Component({
  selector: 'app-registro-sub-categoria',
  templateUrl: './registro-sub-categoria.component.html',
  styleUrls: ['./registro-sub-categoria.component.css']
})
export class RegistroSubCategoriaComponent {
  public descripcion=" ";
  public categorias = [];
  public categoriastamanio = [];
  public paginacion = 1;
  public subcategoria = new Subcategoria();
  public categoria: any = {};
  public elementoaActualizar = '';
  public idActualizar = '';
  public  elementosLista = {
    titulo : 'Categoria',
    query: {model: 'categoria', orderBy: 'idCategoria', orderDir: 'asc', query: null},
    tablaTitulos: ['Id', 'Descripcion'],
    tablaElementos: ['idCategoria', 'descripcion']
  };

  constructor(private _factory: FactoryService) {
    this.cargar(this.paginacion);
    console.log(this.subcategoria);
  }
  cargar(pagina: number){
    this.paginacion = pagina;
    this._factory.get('tipoProducto', 'idTipoProducto', 'asc', this.paginacion, 10).subscribe(
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
    
  
    this._factory.create('tipoProducto',this.subcategoria).subscribe(
      (response: any) => {
        swal(
          'Ok!',
          'Peticion exitosa',
          'success'
        );
        this.cargar(this.paginacion);
      },
      (error: any) => {
        console.log(error);
      }
    );

  }
  eliminar(id){
    this._factory.delete('tipoProducto',id).subscribe(
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
    let data= {
      idTipoProducto: id,
      descripcion: $('#'+id).val()
    };
    console.log(data);
    this._factory.update('tipoProducto', data).subscribe(
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
  selecion(evt) {
    this.categoria = evt;
    this.subcategoria.idCategoria.idCategoria = evt.idCategoria;
  }
  asignarActualizacion(item) {
    this.elementoaActualizar = item;
  }
}
