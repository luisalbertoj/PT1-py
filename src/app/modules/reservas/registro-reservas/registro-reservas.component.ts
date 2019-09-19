import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory.service';
import swal from 'sweetalert2';
import { Reserva } from 'src/app/models/reserva';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-reservas',
  templateUrl: './registro-reservas.component.html',
  styleUrls: ['./registro-reservas.component.css']
})
export class RegistroReservasComponent {
  public descripcion=" ";
  public pacientes = [];
  public pacientestamanio = [];
  public paginacion = 1;
  public reserva= new Reserva;

  constructor(private _factory: FactoryService, private router: ActivatedRoute) { 

    //this.cargar(1);
    //console.log (this.persona);
  }
  guardar() {
   
    console.log("guardamos");
    this._factory.create('reserva',this.reserva).subscribe(
      (response: any) => {
        swal(
          'Ok!',
          'Peticion exitosa',
          'success'
        );
        //this.cargar(this.paginacion);
      },
      (error: any) => {
        console.log(error);
      }
    );

  }
  
}
