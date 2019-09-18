import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory.service';
import swal from 'sweetalert2';
import { Servicios } from 'src/app/models/servicios';

@Component({
  selector: 'app-registro-servicios',
  templateUrl: './registro-servicios.component.html',
  styleUrls: ['./registro-servicios.component.css']
})
export class RegistroServiciosComponent {
  public descripcion=" ";
  public categorias = [];
  public categoriastamanio = [];
  public paginacion = 1;
  public servicio = new Servicios();
  public producto :any = {
    idProducto : '',
    descripcion: ''
  };
  public  elementosLista = {
    titulo : 'Productos',
    query: {model: 'producto', orderBy: 'idProducto', orderDir: 'asc', query: null},
    tablaTitulos: ['Id', 'Descripcion'],
    tablaElementos: ['idProducto', 'descripcion']
  };

  constructor(private _factory: FactoryService) {
    this.cargar(this.paginacion);
  }
  public query: any = null;
  public busqueda: string = '';
  public like: boolean = false;
  cargar(pagina: number){
    this.paginacion = pagina;
    this._factory.get('presentacionProducto', 'idPresentacionProducto', 'asc', this.paginacion, 10,
    this.query, this.like).subscribe(
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
    const data = {
      codigo: this.servicio.codigo,
      flagServicio: 'S',
      idProducto: {
        idProducto: this.producto.idProducto
      },
      nombre: this.servicio.nombre,
      existenciaProducto: this.servicio.existenciaProducto.precioVenta
    };
    console.log(data);
    this._factory.create('presentacionProducto', data).subscribe(
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
    this._factory.delete('presentacionProducto',id).subscribe(
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
  actualizar(id, item: any) {
    item.nombre = $('#'+id + 'm').val();
    if(item.existenciaProducto) { item.existenciaProducto.precioVenta = $('#'+id).val(); }
    else {
      item.existenciaProducto = {
        precioVenta: $('#'+id).val()
      }
    }
    console.log(item);
    this._factory.update('presentacionProducto', item).subscribe(
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
    console.log(evt);
    this.producto.idProducto = evt.idProducto;
    this.producto.descripcion =  evt.descripcion;
  }
  buscar(evt) {
    console.log(evt);
    this.like = true;
    this.query = {
      nombre: evt.trim()
    }
    if(evt.trim() === ''){
      this.query =  null;
      this.like = false;
    }
    this.cargar(this.paginacion);
  }
}
