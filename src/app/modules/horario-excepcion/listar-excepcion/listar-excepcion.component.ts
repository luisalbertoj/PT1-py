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
    "horaAperturaCadena":"",
    "horaCierreCadena":"",
    "flagEsHabilitar":"",
    "idEmpleado":{
      "idPersona":""
    } ,
    "intervaloMinutos":""
    };
  
  lista_excepciones: any;

  constructor(public _factory: FactoryService) { 
    this.cargarHorarioE();
  }
  ngOnInit() {
  }
  cargarHorarioE() {
    this._factory.get('horarioExcepcion').subscribe(
      (response:any) => {
        console.log(response);
        this.lista_excepciones = response.lista;
      }
    );
  }


}
