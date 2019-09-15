import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { FactoryService } from 'src/app/services/factory.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-pacientes',
  templateUrl: './actualizar-pacientes.component.html',
  styleUrls: ['./actualizar-pacientes.component.css']
})
export class ActualizarPacientesComponent implements OnInit {
  public pacientes = [];
  public pacientestamanio = [];
  public paginacion = 1;
  public paciente: Paciente;
  constructor(private _factory: FactoryService) {
  }
  ngOnInit() {
  }
  actualizar(id) {
    this._factory.update('paciente', this.paciente).subscribe(
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
}
