import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import { FactoryService } from 'src/app/services/factory.service';
import swal from 'sweetalert2';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent  {
  public filtro = {
    fechaDesde: new Date(),
    fechaHasta: new Date(),
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
    titulo : 'Profesionales',
    query: {model: 'fichaClinica', orderBy: 'idFichaClinica', orderDir: 'asc', query: null},
    tablaTitulos: ['Id', 'Nombre', 'Cedula'],
    tablaElementos: ['idPersona', 'nombre', 'cedula']
  };
  public reservas = [];
  public paginacion = 1;
  public tamanoPaginacion = [];
  public fichas = [];
  constructor(private _factory: FactoryService, public _util: UtilService) { 
    this.consultar();
  }
  ngOnInit() {
    
  }
  cargar(pagina: number) {
    this.paginacion = pagina;
    this._factory.get('reserva', 'idReserva', 'asc', this.paginacion, 10).subscribe(
      (response: any) => {
        console.log(response);
        this.reservas =  response.lista;
        for (let index = 0; index < Math.trunc(response.totalDatos/10)+1; index++) {
          this.tamanoPaginacion[index] = index*10;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  consultar() {
    let query: any = {};
    query.fechaHastaCadena = this._util.limpiarFecha(new Date(this.filtro.fechaHasta));
    query.fechaDesdeCadena = this._util.limpiarFecha(new Date(this.filtro.fechaDesde));
    if(this.filtro.idCliente !== '') query.idCliente = { idPersona: this.filtro.idCliente };
    if(this.filtro.idEmpleado !== '') query.idEmpleado = { idPersona: this.filtro.idEmpleado};
    if(query === {}) query = null;
    console.log(query);
    this._factory.get('reserva', 'idReserva', 'asc', this.paginacion, 10, query).subscribe(
      (response: any) => {
        console.log(response);
        this.reservas =  response.lista;
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
    fechaDesde: new Date(),
    fechaHasta: new Date(),
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
 
  eliminar(id){
    this._factory.delete('reserva', id).subscribe(
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