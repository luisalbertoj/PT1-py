import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { FactoryService } from 'src/app/services/factory.service';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-pacientes',
  templateUrl: './actualizar-pacientes.component.html',
  styleUrls: ['./actualizar-pacientes.component.css']
})
export class ActualizarPacientesComponent {
  public pacientes = [];
  public pacientestamanio = [];
  public paginacion = 1;
  public persona = new Paciente();
  public idPersona: string;
  constructor(private _factory: FactoryService, private router: ActivatedRoute) {
  this.idPersona = router.snapshot.paramMap.get('id');
  this._factory.get('persona/'+this.idPersona).subscribe(
    (response: any) => {
      console.log('elemento filtrado');
      this.persona.nombre= response.nombre;
      this.persona.apellido= response.apellido;
      this.persona.telefono= response.telefono;
      this.persona.email= response.email;
      this.persona.ruc= response.ruc;
      this.persona.cedula= response.cedula;
      this.persona.tipoPersona= response.tipoPersona;
      this.persona.fechaNacimiento= response.fechaNacimiento;
      }
  );
  console.log(this.idPersona);
  }
  actualizar(id){
    /*let data= {
      idPersona: this.idPersona,
      nombre:$('#'+id).val(),
      apellido:$('#'+id).val(),
      telefono:$('#'+id).val(),
      email:$('#'+id).val(),
      ruc:$('#'+id).val(),
      cedula:$('#'+id).val(),
      tipoPersona:$('#'+id).val(),
      fechaNacimiento:$('#'+id).val() 
    };*/
    this._factory.update('persona', this.persona).subscribe(
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
