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
      nombre:"Trunks",
      fuerza:7000
    },
    {
      nombre:"Defaul",
      fuerza:0
    }
  ]
  @Output()
  public deletePersonaje:EventEmitter<number>=new EventEmitter();


  public borrarPersonaje(index:number):void{
    this.deletePersonaje.emit(index);
  }
}
