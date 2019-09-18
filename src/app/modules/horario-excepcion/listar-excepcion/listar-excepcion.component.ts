import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory.service';

@Component({
  selector: 'app-horario-excepcion',
  templateUrl: './listar-excepcion.component.html',
  styleUrls: ['./listar-excepcion.component.css']
})
export class ListarExcepcionComponent implements OnInit {
  data = {
    "fechaCadena": "",
    "horaAperturaCadena": "",
    "horaCierreCadena": "",
    "flagEsHabilitar": "",
    "idEmpleado": {
      "idPersona": ""
    },
    "intervaloMinutos": ""
  };

  public filtro = {
    fechaDesde: '',
    fechaCadena: '',
    empleado: '',
    cliente: '',
    idCliente: '',
    idEmpleado: ''
  };

  public elementosLista2 = {
    titulo: 'Fisioterapeutas',
    query: { model: 'fichaClinica', orderBy: 'idFichaClinica', orderDir: 'asc', query: null },
    tablaTitulos: ['Id', 'Nombre', 'Cedula'],
    tablaElementos: ['idPersona', 'nombre', 'cedula']
  };

  public fichas = [];
  public paginacion = 1;
  public tamanoPaginacion = [];

  lista_excepciones: any;

  constructor(public _factory: FactoryService) {
    this.cargarHorarioE();
  }
  ngOnInit() {
  }
  cargarHorarioE() {
    this._factory.get('horarioExcepcion').subscribe(
      (response: any) => {
        console.log(response);
        this.lista_excepciones = response.lista;
      }
    );
  }

  selecionCliente(cliente: any) {
    console.log(cliente);
    if (cliente.model === 'persona') {
      this.filtro.cliente = cliente.nombre;
      this.filtro.idCliente = cliente.idPersona;
    } else {
      this.filtro.empleado = cliente.idEmpleado.nombre;
      this.filtro.idEmpleado = cliente.idEmpleado.idPersona;
    }
  }

  consultar() {
    let query: any = {};
    if(this.filtro.fechaDesde !== ''){
      query.fechaCadena = this.limpiarFecha(new Date(this.filtro.fechaDesde));
    } 
    if (this.filtro.idEmpleado !== '') query.idEmpleado = this.filtro.idEmpleado;
    if (query === {}) query = null;
    console.log(query);
    this._factory.get('horarioExcepcion', 'fechaCadena', 'asc', this.paginacion, 10, query).subscribe(
      (response: any) => {
        console.log(response);
        this.lista_excepciones = response.lista;
        for (let index = 0; index < Math.trunc(response.totalDatos / 10) + 1; index++) {
          this.tamanoPaginacion[index] = index * 10;
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

  limpiarFecha(fecha: Date): string {
    let fechaFinal = fecha.toISOString().split('-');
    fechaFinal[2] = fechaFinal[2].split('T')[0];    
    return (fechaFinal[0]+fechaFinal[1]+fechaFinal[2]);
  }


}
