import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: 'listaDBZ.component.html'
})

export class ListaDBZComponent {
  @Input("miLista")
  public listaPersonajes:Personaje[]=[
    {
      id:"",
      nombre:"Trunks",
      fuerza:7000
    },
    {
      id:"",
      nombre:"Defaul",
      fuerza:0
    }
  ]
  @Output()
  public deletePersonaje:EventEmitter<string>=new EventEmitter();


  public borrarPersonaje(id:string):void{
    this.deletePersonaje.emit(id);
  }
}
