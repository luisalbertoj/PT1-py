import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { FactoryService } from 'src/app/services/factory.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-lista-servicio',
  templateUrl: './lista-servicio.component.html',
  styleUrls: ['./lista-servicio.component.css']
})
export class ListaServicioComponent implements OnInit {
  public filtro = {
    fechaDesde: '',
    fechaHasta: '',
    fechaDesdeCadena: '',
    fechaHastaCadena: '',
    empleado: '',
    cliente: '',
    idCliente: '',
    idEmpleado: ''
  };
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
  public fichas = [];
  public paginacion = 1;
  public tamanoPaginacion = [];
  public categorias: any = [];
  public subCategorias: any = [];
  public seleccionCategoria: boolean = true;
  public subCategoiraSeleccionada: string  = '';
  public categoiraSeleccionada: any = {};
  constructor(private _factory: FactoryService, public _util: UtilService) { }
  ngOnInit() {
    this.cargar(this.paginacion);
    this.cargarCategorias();
  }
  cargar(pagina: number) {
    this.paginacion = pagina;
    this._factory.get('servicio', 'idServicio', 'asc', this.paginacion, 10).subscribe(
      (response: any) => {
        console.log('Lista Servicios');
        console.log(response);
        this.fichas =  response.lista;
        for (let index = 0; index < Math.trunc(response.totalDatos/10)+1; index++) {
          this.tamanoPaginacion[index] = index*10;
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
    this.subCategoiraSeleccionada = item.idTipoProducto;
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
  consultar() {
    let query: any = {};
    if(this.filtro.fechaHasta !== '') query.fechaHastaCadena = this._util.limpiarFecha(new Date(this.filtro.fechaHasta));
    if(this.filtro.fechaDesde !== '') query.fechaDesdeCadena = this._util.limpiarFecha(new Date(this.filtro.fechaDesde));
    if(this.filtro.idCliente !== '') query.idFichaClinica.idCliente.idPersona = this.filtro.idCliente;
    if(this.filtro.idEmpleado !== '') query.idEmpleado = this.filtro.idEmpleado;
    if(this.subCategoiraSeleccionada !== '') query.idTipoProducto = {idTipoProducto: this.subCategoiraSeleccionada};
    if(query === {}) query = null;
    console.log(query);
    this._factory.get('servicio', 'idServicio', 'asc', this.paginacion, 10, query).subscribe(
      (response: any) => {
        console.log(response);
        this.fichas =  response.lista;
        for (let index = 0; index < Math.trunc(response.totalDatos/10)+1; index++) {
          this.tamanoPaginacion[index] = index*10;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
    query = null;
  }
  limpiar() {
    this.filtro = {
      fechaDesde: '',
    fechaHasta: '',
    fechaDesdeCadena: '',
    fechaHastaCadena: '',
    empleado: '',
    cliente: '',
    idCliente: '',
    idEmpleado: ''
    };
  }
  selecionCliente (cliente: any) { 
    console.log(cliente);
    if(cliente.model === 'persona') {
      this.filtro.cliente = cliente.nombre;
      this.filtro.idCliente = cliente.idPersona;
    } else {
      this.filtro.empleado = cliente.idEmpleado.nombre;
      this.filtro.idEmpleado = cliente.idEmpleado.idPersona;
    }
  }
  update(modelo) {
    modelo.observacion = $('#'+modelo.idFichaClinica).val();
    const data = {
      idFichaClinica: modelo.idFichaClinica,
      observacion: modelo.observacion
    };
    console.log(data);
    this._factory.update('fichaClinica', data).subscribe(
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
  eliminar(id){
    this._factory.delete('fichaClinica',id).subscribe(
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
}
