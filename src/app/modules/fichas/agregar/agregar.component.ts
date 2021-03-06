import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory.service';
import { Ficha } from 'src/app/models/ficha';
import swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  public empleado: any = {
    nombre: ''
  };
  public cliente: any = {
    nombre: ''
  };
  public categorias = [];
  public subCategorias = [];
  public seleccionCategoria: boolean = true;
  public subCategoiraSeleccionada: any = {};
  public categoiraSeleccionada: any = {};
  public ficha: any = new Ficha();
  public elementosLista = {
    titulo : '',
    query: {model: 'persona', orderBy: 'idPersona', orderDir: 'asc', query: null},
    tablaTitulos: ['Id', 'Nombre', 'Cedula'],
    tablaElementos: ['idPersona', 'nombre', 'cedula']
  };
  public elementosLista2 = {
    titulo : 'Fisioterapeutas',
    query: {model: 'fichaClinica', orderBy: 'idFichaClinica', orderDir: 'asc', query: null},
    tablaTitulos: ['Id', 'Nombre', 'Cedula'],
    tablaElementos: ['idPersona', 'nombre', 'cedula']
  };

  constructor(private _factory: FactoryService) { }

  ngOnInit() {
    this.cargarCategorias();
  }
  cargarCategorias() {
    this._factory.get('categoria').subscribe(
      (response: any) => {
        console.log(response);
        this.categorias = response.lista;
      }
    );
  }
  subCategoriaSeleccionada(item: any) {
    this.subCategoiraSeleccionada = item;
  }
  categoriaSeleccionada(item: any) {
    this.categoiraSeleccionada = item;
    this.seleccionCategoria = false;
    const queryA = {idCategoria: {idCategoria: item.idCategoria}};
    console.log(queryA);
    this._factory.get('tipoProducto', null, null, null, null, queryA).subscribe(
      (response: any) => {
        console.log(response);
        this.subCategorias = response.lista;
      }
    );
  }
  selecionCliente (model: any) { 
    console.log(model);
    if(model.model === 'persona') {
      this.cliente = model;
    } else {
      this.empleado = model.idEmpleado;
    }
  }
  createficha(): void {
    this.ficha.idCliente = { idPersona: this.cliente.idPersona };
    this.ficha.idEmpleado = { idPersona: this.empleado.idPersona };
    this.ficha.idTipoProducto = { idTipoProducto: this.subCategoiraSeleccionada.idTipoProducto};
    console.log(this.ficha);
    this._factory.create('fichaClinica', this.ficha).subscribe(
      (response: any) => {
        swal(
          'Ok!',
          'Peticion exitosa',
          'success'
        );
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
