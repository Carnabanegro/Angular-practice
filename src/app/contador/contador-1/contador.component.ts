import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <div>
            <h1>{{title}}</h1>
        </div>
        <div>
            <h3> La base es 5: {{base}}</h3>
        </div>
        <div>
            <button (click)="acumular(-base)">-1</button>
            <h3>{{numero}}</h3>
            <button (click)="acumular(+base)">+1</button>
        </div>
    `
})

export class ContadorComponent{

    public title = 'bases';
    public numero : number = 10;
    public base : number = 5;


    acumular(num : number){
        this.numero = this.numero + num;
    }

    restar() {
        this.numero--;
    }
    sumar(){
        this.numero++;
    }

}