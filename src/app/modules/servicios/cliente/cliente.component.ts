import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FactoryService } from 'src/app/services/factory.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  @Input() titulo: string;
  @Input() query: any;
  @Input() tablaTitulos: [];
  @Input() tablaElementos: any;
  public clientes = [];
  public modeloMostrar = [];
  public paginacion = 1;
  public tamanoPaginacion = [];
  public busqueda: string = '';
  public like: boolean = false;
  @Output () increment: EventEmitter <Object> = new EventEmitter (); 
  constructor(private _factory: FactoryService) { }

  ngOnInit() {
    this.cargar(this.paginacion);
  }
  cargar(paginacion: number) {
    this.tamanoPaginacion = [];
    this.paginacion = paginacion;
    this._factory.get(this.query.model, this.query.orderBy, this.query.orderDir, this.paginacion, 5, this.query.query, this.like).subscribe(
      (response: any) => {
        console.log(response);
        this.clientes = response.lista;
        for (let index = 0; index < Math.trunc(response.totalDatos/5)+1; index++) {
          this.tamanoPaginacion[index] = index*5;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  asignar(cliente: any) {
    cliente.model = this.query.model;
    this.increment.emit (cliente); 
  }
  buscar(evt) {
    console.log(evt);
    const tablaElementos = this.tablaElementos[1];
    if(this.query.model === 'persona') {
    this.query.query = {
      'nombre' : evt.trim()
    }
    }
    if(this.query.model === 'categoria') {
    this.query.query = {
      'descripcion' : evt.trim()
    };
    }
    this.like = true;
    if(evt.trim() === ''){
      this.query.query =  null;
      this.like = false;
    }
    this.cargar(this.paginacion);
  }
}
