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
export class ActualizarPacientesComponent implements OnInit {
  public pacientes = [];
  public pacientestamanio = [];
  public paginacion = 1;
  public persona: Paciente;
  public idPersona: string;
  constructor(private _factory: FactoryService, private router: ActivatedRoute) {
  this.idPersona = router.snapshot.paramMap.get('id');
  this._factory.get('persona/'+this.idPersona).subscribe(
    (response: any) => {
      console.log('elemento filtrado');
      console.log(response);
    }
  );
  console.log(this.idPersona);
  }
  ngOnInit() {
  }
  actualizar(id) {
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
