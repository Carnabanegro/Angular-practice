import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.scss']
})
export class AgregarPersonajeComponent {

  //@Input() personajes : Personaje[] = []
  @Input() nuevo : Personaje = {nombre: '', poder: 0} 

  //@Output()onNuevoPersonaje : EventEmitter<Personaje>= new EventEmitter()

  

  agregar(){

    if (this.nuevo.nombre.trim().length == 0) return ;
    this.dbzService.agregarNuevoPersonaje(this.nuevo)
    
    //this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {nombre: '', poder: 0}
  }

  constructor(private dbzService: DbzService) {}

}
