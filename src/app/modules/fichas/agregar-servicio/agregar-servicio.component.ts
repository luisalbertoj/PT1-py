import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { FactoryService } from 'src/app/services/factory.service';
import { Ficha } from 'src/app/models/ficha';

@Component({
  selector: 'app-agregar-servicio',
  templateUrl: './agregar-servicio.component.html',
  styleUrls: ['./agregar-servicio.component.css']
})
export class AgregarServicioComponent implements OnInit {
  public empleado: any = {
    nombre: ''
  };
  public cliente: any = {
    nombre: ''
  };
  public fichas = [];
  public paginacion = 1;
  public tamanoPaginacion = [];
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
  public servicio: any = {
    observacion: ''
  };
  

  constructor(private _factory: FactoryService) { }

  ngOnInit() {
    this.cargarCategorias();
  }
  cargar(pagina: number) {
    this.paginacion = pagina;
    this._factory.get('servicio', 'idServicio', 'asc', this.paginacion, 10).subscribe(
      (response: any) => {
        console.log('Lista Servicios');
        console.log(response);
        this.fichas = response.lista;
        for (let index = 0; index < Math.trunc(response.totalDatos / 10) + 1; index++) {
          this.tamanoPaginacion[index] = index * 10;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
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
