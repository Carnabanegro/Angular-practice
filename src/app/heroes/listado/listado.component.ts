import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  public heroes : string[] = ['Spiderman','Iron Man', 'Hulk', 'Venom']
  public heroeBorrado : string = '';

  borrarHeroe(){
    this.heroeBorrado =  this.heroes.shift() || ''
  }

}
