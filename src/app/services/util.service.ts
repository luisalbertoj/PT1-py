import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }
  limpiarFecha(fecha: Date): string {
    let fechaFinal = fecha.toISOString().split('-');
    fechaFinal[2] = fechaFinal[2].split('T')[0];    
    return (fechaFinal[0]+fechaFinal[1]+fechaFinal[2]);
  }
}
