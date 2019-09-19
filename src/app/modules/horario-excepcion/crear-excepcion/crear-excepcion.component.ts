import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-excepcion',
  templateUrl: './crear-excepcion.component.html',
  styleUrls: ['./crear-excepcion.component.css']
})
export class CrearExcepcionComponent implements OnInit {

  horarioExcepcion = {
    "fechaCadenaF": new Date(),
    "horaAperturaCadena": "",
    "horaCierreCadena": "",
    "flagEsHabilitar": "",
    "idEmpleado": {
      "idPersona": 4,
      "nombre": ""
    },
    "intervaloMinutos": 10,
    "fechaCadena": "",
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

  constructor(private _factory: FactoryService) {

  }

  ngOnInit() {

  }

  guardar() {
    this.horarioExcepcion.fechaCadena = this.limpiarFecha(this.horarioExcepcion.fechaCadenaF);
    delete this.horarioExcepcion.fechaCadenaF;
    console.log(this.horarioExcepcion);
    this._factory.create('horarioExcepcion', this.horarioExcepcion).subscribe(
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

  limpiarFecha(fecha: Date): string {
    let fechaFinal = fecha.toISOString().split('-');
    fechaFinal[2] = fechaFinal[2].split('T')[0];
    return (fechaFinal[0] + fechaFinal[1] + fechaFinal[2]);
  }
  check(value) {
    this.horarioExcepcion.flagEsHabilitar = value
    console.log(value);
  }

  selecionCliente(cliente: any) {
    console.log(cliente);
    this.horarioExcepcion.idEmpleado = cliente.idEmpleado
  }

}
