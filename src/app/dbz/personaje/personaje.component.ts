import { Component, Input} from '@angular/core';
//import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent {


  //@Input() personajes : Personaje[] = []

  get personajes(){
      return this.dbzService.personajes;
  }

  constructor( private  dbzService: DbzService ){}

}
