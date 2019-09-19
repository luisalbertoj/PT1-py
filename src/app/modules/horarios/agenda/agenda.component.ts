import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import PerfectScrollbar from 'perfect-scrollbar';
import { FactoryService } from 'src/app/services/factory.service';
import { UtilService } from 'src/app/services/util.service';
import { Agenda } from 'src/app/models/agenda';


declare const $: any;

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {

  public agenda = new Agenda();
  public empleado: any = { nombre: '' };
  public descripcion = " ";
  public categorias = [];
  public categoriastamanio = [];
  public paginacion = 1;
  public elementosLista = {
    titulo: 'Productos',
    query: { model: 'producto', orderBy: 'idProducto', orderDir: 'asc', query: null },
    tablaTitulos: ['Id', 'Descripcion'],
    tablaElementos: ['idProducto', 'descripcion']
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

  public tamanoPaginacion = [];

  lista_excepciones: any;


  public query: any = null;
  public busqueda: string = '';
  public like: boolean = false;

  constructor(private _factory: FactoryService) {
    this.cargar(this.paginacion);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  selecionCliente(cliente: any) {
    this.empleado = cliente.idEmpleado

  }


  cargar(pagina: number) {
    this.paginacion = pagina;
    this._factory.get('personaHorarioAgenda', 'idPersonaHorarioAgenda', 'asc', this.paginacion, 10,
      this.query, this.like).subscribe(
        (response: any) => {
          console.log(response);
          this.categorias = response.lista;
          for (let index = 0; index < Math.trunc(response.totalDatos / 10) + 1; index++) {
            this.categoriastamanio[index] = index * 10;
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  guardar() {
    const data = {
      dia: this.agenda.dia,
      horaAperturaCadena: this.agenda.horaAperturaCadena,
      horaCierreCadena: this.agenda.horaCierreCadena,
      intervaloMinutos: this.agenda.intervaloMinutos,
      idEmpleado: {
        idPersona: this.empleado.idPersona
      },
    };
    console.log(data);
    this._factory.create('personaHorarioAgenda', data).subscribe(
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

  buscar(evt) {
    console.log(evt);
    this.like = true;
    this.query = {
      nombre: evt.trim()
    }
    if (evt.trim() === '') {
      this.query = null;
      this.like = false;
    }
    this.cargar(this.paginacion);
  }

  eliminar(id) {
    this._factory.delete('personaHorarioAgenda', id).subscribe(
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
    item.dia = $('#' + id + 'm').val();
    item.horaAperturaCadena = $('#' + id + 'n').val();
    item.horaCierreCadena = $('#' + id + 'o').val();
    item.intervaloMinutos = $('#' + id + 'p').val();
    const data = {
      idPersonaHorarioAgenda: item.idPersonaHorarioAgenda,
      dia: item.dia,
      horaAperturaCadena: item.horaAperturaCadena,
      horaCierreCadena: item.horaCierreCadena,
      intervaloMinutos: item.intervaloMinutos,
      idEmpleado: { idPersona: item.idEmpleado.idPersona }
    };
    console.log(data);
    this._factory.update('personaHorarioAgenda', data).subscribe(
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
      fechaCadena: '',
      empleado: '',
      cliente: '',
      idCliente: '',
      idEmpleado: ''
    };
  }

  limpiarFecha(fecha: Date): string {
    let fechaFinal = fecha.toISOString().split('-');
    fechaFinal[2] = fechaFinal[2].split('T')[0];
    return (fechaFinal[0] + fechaFinal[1] + fechaFinal[2]);
  }
}
