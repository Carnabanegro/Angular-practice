import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()

export class DbzService{

    constructor(){}

    private _personajes : Personaje[] = [{nombre: 'Goku', poder: 50000},{nombre: 'Krillin', poder: 5000},{nombre: 'Piccoro', poder: 20000},{nombre: 'Gohan', poder: 30000}]

    get personajes () : Personaje[] {
        return [...this._personajes];
    }
    
    agregarNuevoPersonaje(personaje: Personaje){
        this._personajes.push(personaje)
    }
}