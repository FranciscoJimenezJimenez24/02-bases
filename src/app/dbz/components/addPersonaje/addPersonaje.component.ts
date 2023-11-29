import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: 'addPersonaje.component.html'
})

export class AddPersonajeComponent {
  public personaje:Personaje={
    nombre:"",
    fuerza:0
  }

  public addPesonaje():void{
    console.log(this.personaje)
  }
}
