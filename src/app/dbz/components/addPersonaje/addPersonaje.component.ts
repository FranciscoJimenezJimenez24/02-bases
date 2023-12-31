import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: 'addPersonaje.component.html'
})

export class AddPersonajeComponent {
  @Output()
  public onNewPersonaje: EventEmitter<Personaje>=new EventEmitter();

  public personaje:Personaje={
    id:"",
    nombre:"",
    fuerza:null
  }

  public addPesonaje():void{
    debugger;
    console.log(this.personaje)
    //if (this.personaje.nombre.length === 0) return;
    this.onNewPersonaje.emit(this.personaje)
    this.personaje={id:"",nombre:"",fuerza:null};
  }
}
