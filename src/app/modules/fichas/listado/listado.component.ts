import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public filtro = {
    fechaDesde: new Date(),
    fechaHasta: new Date(),
    fechaDesdeCadena: '',
    fechaHastaCadena: '',
    empleado: '',
    cliente: ''
  };
  public descripcion = "";
  public paginacion = 1;
  constructor(private _factory: FactoryService) { }
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    this._factory.get('fichaClinica', 'idFichaClinica', 'asc', this.paginacion, 10).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  consultar() {
    this.filtro.fechaDesdeCadena = this.limpiarFecha(this.filtro.fechaDesde);
    this.filtro.fechaHastaCadena = this.limpiarFecha(this.filtro.fechaHasta);
    this._factory.get('fichaClinica', 'idFichaClinica', 'asc', this.paginacion, 10, this.filtro).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  limpiar() {
    this.filtro = {
      fechaDesde: new Date(),
      fechaHasta: new Date(),
      fechaDesdeCadena: '',
      fechaHastaCadena: '',
      empleado: '',
      cliente: ''
    };
  }
  limpiarFecha(fecha: Date): string {
    let fechaFinal = fecha.toISOString().split('-');
    fechaFinal[2] = fechaFinal[2].split('T')[0];    
    return (fechaFinal[0]+fechaFinal[1]+fechaFinal[2]);
  }
}
