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
  public servicios = new Servicios();
  constructor(private _factory: FactoryService) {
    this.cargar(this.paginacion);
  }
  cargar(pagina: number){
    this.paginacion = pagina;
    this._factory.get('presentacionProducto', 'idPresentacionProducto', 'asc', this.paginacion, 10).subscribe(
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
    this._factory.create('presentacionProducto',this.servicios).subscribe(
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
