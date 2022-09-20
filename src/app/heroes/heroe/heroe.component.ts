import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent{

    public nombre : string = 'Iron Man';
    public edad : number = 30;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void{
        
    }

    cambiarEdad(){

    }

}