import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { FactoryService } from 'src/app/services/factory.service';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-actualizar-pacientes',
  templateUrl: './actualizar-pacientes.component.html',
  styleUrls: ['./actualizar-pacientes.component.css']
})
export class ActualizarPacientesComponent {
  public pacientes = [];
  public pacientestamanio = [];
  public paginacion = 1;
  public persona: any = new Paciente();
  public idPersona: string;
  constructor(private _factory: FactoryService, private router: ActivatedRoute,
    private _util: UtilService) {
  this.idPersona = router.snapshot.paramMap.get('id');
  this._factory.get('persona/'+this.idPersona).subscribe(
    (response: any) => {
      console.log('elemento filtrado');
      this.persona = response;
      this.persona.fechaNacimiento = new Date(this.persona.fechaNacimiento);
      }
  );
  console.log(this.idPersona);
  }
  actualizar(id?: any){
    const fechaAntigua = this.persona.fechaNacimiento;
    this.persona.fechaNacimiento = this._util.formatoFecha(this.persona.fechaNacimiento) + ' 00:00:00';
    console.log(this.persona.fechaNacimiento);
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
    this.persona.fechaNacimiento = fechaAntigua;
  }
}
