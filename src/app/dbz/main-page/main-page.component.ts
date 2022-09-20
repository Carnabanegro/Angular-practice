import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Roshi',
    poder: 100000000000
  }

  constructor(private dbzService: DbzService){}

  
}
