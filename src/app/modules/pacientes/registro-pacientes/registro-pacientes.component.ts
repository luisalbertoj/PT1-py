import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import swal from 'sweetalert2';
import { FactoryService } from 'src/app/services/factory.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-registro-categoria',
  templateUrl: './registro-pacientes.component.html',
  styleUrls: ['./registro-pacientes.component.css']
})
export class RegistroPacienteComponent  {
  public descripcion=" ";
  public pacientes = [];
  public pacientestamanio = [];
  public paginacion = 1;
  public persona = new Paciente();
  constructor(private _factory: FactoryService, private routing: Router) {
    this.cargar(1);
    console.log (this.persona);
  }
  cargar(pagina: number){
    this.paginacion = pagina;
    this._factory.get('persona', 'idPersona', 'desc', this.paginacion, 10).subscribe(
      (response: any) => {
        console.log(response);
        this.pacientes = response.lista;
        for (let index = 1; index < Math.trunc(response.totalDatos/10)+1; index++) {
          this.pacientestamanio[index] = index*10;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  guardar() {
   
    console.log("guardamos");
    this._factory.create('persona',this.persona).subscribe(
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
  eliminar(id){
    this._factory.delete('persona', id).subscribe(
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