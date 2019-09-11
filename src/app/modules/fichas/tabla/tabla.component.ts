import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory.service';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor(public _factory: FactoryService) {
    this.cargarFichas();
   }

  ngOnInit() {
  }
  cargarFichas() {
    this._factory.get('fichaClinica').subscribe(
      (response:any) => {
        console.log(response);
      }
    );
  }
  crear(data: any) {
    this._factory.create('fichaClinica', data).subscribe(
      (response:any) => {
        console.log(response);
      }
    );
  }
  actualizar(data: any) {
    this._factory.update('fichaClinica', data).subscribe(
      (response:any) => {
        console.log(response);
      }
    );
  }
  borrar(id: any) {
    this._factory.delete('fichaClinica', id).subscribe(
      (response:any) => {
        console.log(response);
      }
    );
  }
}
